'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import '../styles/globals.css';

const BACKEND = 'http://localhost:8080/';

interface Props {}

const FileUpload: NextPage<Props> = () => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [videoType, setVideotype] = useState(false);

  const [fileId, setFileId] = useState<string | null>(null);
  const [fileName, setFilename] = useState<string | null>(null);

  /**
   * Cancel files
   */
  const onCancelFile = async () => {
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <form
      className="w-full border-gray-500 p-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        {fileName ? (
          <div className="justify-bottom mt-4 flex gap-1.5 text-black md:mt-0 md:flex-col">
            {fileName}
          </div>
        ) : (
          <div className="justify-bottom mt-4 flex gap-1.5 md:mt-0 md:flex-col">
            fileinfo
          </div>
        )}

        <div className="flex-grow">
          {previewUrl ? (
            <div className="mx-auto w-80">
              {videoType ? (
                <iframe
                  style={{ objectFit: 'cover' }}
                  src={previewUrl}
                  width={320}
                  height={180}
                ></iframe>
              ) : (
                <img
                  alt="image upload preview"
                  style={{ objectFit: 'cover' }}
                  src={previewUrl}
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
                    setFile(file);

                    setPreviewUrl(URL.createObjectURL(file));
                    if (file.type[0] === 'v') {
                      setVideotype(true);
                    } else if (file.type[0] === 'i') {
                      setVideotype(false);
                    }
                  }
                }}
              />
            </label>
          )}
        </div>

        {fileId ? (
          <div className="justify-top mt-4 flex gap-1.5 md:mt-0 md:flex-col">
            <Link
              href={{
                pathname: '/tag',
                query: { id: fileId },
              }}
            >
              <button
                disabled={!fileId}
                className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-green-400 disabled:bg-gray-200 md:w-auto md:text-base"
              >
                Continue
              </button>
            </Link>
          </div>
        ) : (
          <div className="justify-top mt-4 flex gap-1.5 md:mt-0 md:flex-col">
            <button
              disabled={!previewUrl}
              onClick={() => {
                setUploading(true);
                try {
                  if (!file) {
                    return;
                  }

                  const formData = new FormData();

                  formData.append('media', file);
                  const filename = file['name'];
                  setFilename(filename);

                  fetch(BACKEND + 'add/file', {
                    method: 'POST',
                    body: formData,
                  })
                    .then((response) => response.json())
                    .then((formData) => {
                      setFileId(formData[filename]['uri']);
                    });
                  console.log('File was uploaded successfully:', file['name']);
                } catch (error: any) {
                  console.error(error);
                  alert('File upload failed.');
                }
                setUploading(false);
              }}
              className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-800 disabled:bg-gray-200 md:w-auto md:text-base"
            >
              Upload
            </button>

            <button
              disabled={!previewUrl}
              onClick={onCancelFile}
              className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-400 disabled:bg-gray-200 md:w-auto md:text-base"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default FileUpload;
