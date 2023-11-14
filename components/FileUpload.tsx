'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

interface Props {}

const SingleFileUploadForm: NextPage<Props> = () => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  //const [videoFile, setVideoFile] = useState();

  const onCancelFile = async () => {
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!file) {
        return;
      }

      const formData = new FormData();
      formData.append('media', file);

      fetch('http://localhost:8080/add/file', {
        method: 'POST',
        body: formData,
      }).then((response) => response.json());

      console.log('File was uploaded successfully:', file['name']);
    } catch (error: any) {
      console.error(error);
      alert('File upload failed.');
    }
    setUploading(false);
  };

  return (
    <form
      className="w-full border-gray-500 p-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        <div className="justify-bottom mt-4 flex gap-1.5 md:mt-0 md:flex-col">
          fileinfo
        </div>
        <div className="flex-grow">
          {previewUrl ? (
            <div className="mx-auto w-80">
              <Image
                alt="file uploader preview"
                style={{ objectFit: 'cover' }}
                src={previewUrl}
                width={320}
                height={218}
                layout="fixed"
              />
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
              <strong className="text-sm font-medium text-black">
                Select an image or a video
              </strong>
              <input
                className="block h-0 w-0"
                name="file"
                type="file"
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];
                    /** Setting file state */
                    setFile(file); // we will use the file state, to send it later to the server

                    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image}
                  }
                }}
              />
            </label>
          )}
        </div>
        <div className="justify-top mt-4 flex gap-1.5 md:mt-0 md:flex-col">
          <button
            disabled={!previewUrl}
            onClick={handleUpload}
            className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-800 disabled:bg-gray-200 md:w-auto md:text-base"
          >
            Save & Upload
          </button>
          <button
            disabled={!previewUrl}
            onClick={onCancelFile}
            className="w-1/2 rounded-sm bg-gray-700 px-2 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-400 disabled:bg-gray-200 md:w-auto md:text-base"
          >
            Cancel file
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        <div className="justify-bottom mt-4 flex gap-1.5 md:mt-0 md:flex-col">
          Key Frames
        </div>
      </div>

      <hr />
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        <div className="justify-bottom mt-4 flex gap-1.5 md:mt-0 md:flex-col">
          Tags
        </div>
      </div>
    </form>
  );
};

export default SingleFileUploadForm;
