'use client';

import { NextPage } from 'next';
import Link from 'next/link';

import { useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

import { InferenceSession, Tensor } from 'onnxruntime-web';
import '../styles/globals.css';
import { handleImageScale } from './helpers/scaleHelper';
import { modelScaleProps } from './helpers/Interfaces';
import { onnxMaskToImage } from './helpers/maskUtils';
import { modelData } from './helpers/onnxModelAPI';
import Stage from './helpers/Stage';
import AppContext from './helpers/createContext';
const ort = require('onnxruntime-web');
/* @ts-ignore */
import npyjs from 'npyjs';

const BACKEND = 'http://localhost:8080/';
const IMAGE_EMBEDDING = './_next/static/chunks/pages/dogs_embedding.npy';
const MODEL_DIR = './_next/static/chunks/pages/sam_onnx_example.onnx';

interface Props {}

const AddTag: NextPage<Props> = () => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [videoType, setVideotype] = useState<string | null>(null);

  const [fileId, setFileId] = useState<string | null>(null);
  const [fileName, setFilename] = useState();
  const searchParams = useSearchParams();

  //console.log(searchParams.get('id'));

  /**
   * Get Media from MeGraS
   */
  useEffect(() => {
    async function fetchMedia() {
      setFileId(searchParams.get('id'));
      setUrl(BACKEND + fileId);
      setVideotype(searchParams.get('ftype'));

      let options = {
        method: 'POST',
        body: JSON.stringify({
          s: ['<' + BACKEND + '/' + fileId + '>'],
          p: [],
          o: [],
        }),
      };
      try {
        let response = await fetch(BACKEND + 'query/quads', options);

        if (response == undefined) return;
        let data = await response.json();
        console.log(data.results);

        data.results.forEach((res: any) => {
          console.log(res.p);
          if (res.p === '<http://megras.org/schema#fileName>') {
            setFilename(res.o.replace('^^String', ''));
          }
        });
        console.log(fileName);
      } catch (error: any) {
        alert('ERROR! MeGraS is not connected.');
      }
    }
    fetchMedia();
  });

  const deleteMedia = async () => {
    try {
      let response = await fetch(BACKEND + '/' + fileId, {
        method: 'DELETE',
      });
      console.log(fileId);

      if (response == undefined) return;
      if (response.ok) {
        return window.open('/', '_self');
      } else {
        console.log(response.statusText);
      }
    } catch (error: any) {
      console.error(error);
      alert('ERROR! MeGraS is not connected.');
    }
  };

  /**
   * Reference: Segment Anything - Meta
   */
  const {
    clicks: [clicks],
    image: [, setImage],
    maskImg: [, setMaskImg],
  } = useContext(AppContext)!;
  const [model, setModel] = useState<InferenceSession | null>(null); // ONNX model
  const [tensor, setTensor] = useState<Tensor | null>(null); // Image embedding tensor

  // The ONNX model expects the input to be rescaled to 1024.
  // The modelScale state variable keeps track of the scale values.
  const [modelScale, setModelScale] = useState<modelScaleProps | null>(null);

  // Initialize the ONNX model. load the image, and load the SAM
  // pre-computed image embedding
  useEffect(() => {
    // Initialize the ONNX model
    const initModel = async () => {
      try {
        if (MODEL_DIR === undefined) return;
        const URL: string = MODEL_DIR;

        const model = await InferenceSession.create(URL);
        setModel(model);
      } catch (e) {
        console.log(e);
      }
    };
    initModel();

    // Load the image
    const url = new URL(
      BACKEND + 'iACDw-fH8_P5yVsZCvKus8et4qhYQ70NJZHzUEoTDdr-ZHM1AttlCug',
      location.origin,
    );
    loadImage(url);

    // Load the Segment Anything pre-computed embedding
    Promise.resolve(loadNpyTensor(IMAGE_EMBEDDING, 'float32')).then(
      (embedding) => setTensor(embedding),
    );
  }, []);

  const loadImage = async (url: URL) => {
    try {
      const img = new Image();
      img.src = url.href;
      img.onload = () => {
        const { height, width, samScale } = handleImageScale(img);
        setModelScale({
          height: height, // original image height
          width: width, // original image width
          samScale: samScale, // scaling factor for image which has been resized to longest side 1024
        });
        img.width = width;
        img.height = height;
        setImage(img);
      };
    } catch (error) {
      console.log(error);
    }
  };

  // Decode a Numpy file into a tensor.
  const loadNpyTensor = async (tensorFile: string, dType: string) => {
    let npLoader = new npyjs();
    const npArray = await npLoader.load(tensorFile);
    const tensor = new ort.Tensor(dType, npArray.data, npArray.shape);
    return tensor;
  };

  // Run the ONNX model every time clicks has changed
  useEffect(() => {
    runONNX();
  }, [clicks]);

  const runONNX = async () => {
    try {
      if (
        model === null ||
        clicks === null ||
        tensor === null ||
        modelScale === null
      )
        return;
      else {
        // Preapre the model input in the correct format for SAM.
        // The modelData function is from onnxModelAPI.tsx.
        const feeds = modelData({
          clicks,
          tensor,
          modelScale,
        });
        if (feeds === undefined) return;
        // Run the SAM ONNX model with the feeds returned from modelData()
        const results = await model.run(feeds);
        const output = results[model.outputNames[0]];
        // The predicted mask returned from the ONNX model is an array which is
        // rendered as an HTML image using onnxMaskToImage() from maskUtils.tsx.
        setMaskImg(
          onnxMaskToImage(output.data, output.dims[2], output.dims[3]),
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className="w-full border-gray-500 p-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        {fileName ? (
          <div className="justify-bottom mt-4 flex gap-1.5 md:mt-0 md:flex-col">
            {fileName}
          </div>
        ) : (
          <div className="justify-bottom mt-4 flex gap-1.5 md:mt-0 md:flex-col">
            fileinfo
          </div>
        )}

        <div className="flex-grow">
          {url ? (
            <div className="mx-auto w-80">
              {videoType ? (
                <iframe
                  style={{ objectFit: 'cover' }}
                  src={url}
                  width={320}
                  height={180}
                ></iframe>
              ) : (
                <img
                  alt="image upload preview"
                  style={{ objectFit: 'cover' }}
                  src={url}
                  width={320}
                  height={180}
                ></img>
              )}
            </div>
          ) : (
            <label className="flex h-full cursor-pointer flex-col items-center justify-center py-3 transition-colors duration-150 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g transform="translate(2 3)">
                  <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z" />
                  <circle cx="10" cy="10" r="4" />
                </g>
              </svg>
            </label>
          )}
        </div>

        <div className="justify-top mt-4 flex gap-1.5 md:mt-0 md:flex-col">
          <Link
            href={{
              pathname: '/exploration',
            }}
          >
            <button
              disabled={!fileId}
              className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-green-400 disabled:bg-gray-200 md:w-auto md:text-base"
            >
              Continue
            </button>
          </Link>
          <button
            disabled={!fileId}
            onClick={deleteMedia}
            className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-400 disabled:bg-gray-200 md:w-auto md:text-base"
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-1 md:flex-row md:py-4">
        <div className="mt-4 flex justify-center gap-1 text-black md:mt-0 md:flex-col">
          Key Frames
        </div>
        <div className="mx-auto w-80">
          <Stage />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        <div className="mt-4 flex justify-center gap-1.5 text-black md:mt-0 md:flex-col">
          Tags
        </div>
        <div className="mx-auto w-80">
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Add tags..."
          />
        </div>
      </div>
    </form>
  );
};

export default AddTag;
