import React, { useState, useEffect, useCallback } from 'react';
import { IconTickCircle, IconSpin } from '@douyinfe/semi-icons';
import { Image } from '@douyinfe/semi-ui';

import Link from 'next/link';

const BACKEND = 'http://localhost:8080/';

const MediaSearch = () => {
  const [input, setInput] = useState();
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [videoType, setVideotype] = useState<string | null>(null);

  const [fileId, setFileId] = useState<string | null>(null);
  const [fileName, setFilename] = useState<string | null>(null);

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

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
    <div>
      <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
        <input
          type="search"
          id="search"
          value={input}
          onChange={handleChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search tags..."
          required
        />
        <Link
          href={{
            pathname: '/exploration/search',
            query: { tag: input },
          }}
        >
          <button
            disabled={!input}
            className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-500 disabled:bg-gray-200 md:w-auto md:text-base"
          >
            Search
          </button>
        </Link>
        <br />
      </div>

      <form
        className="w-full border-gray-500 p-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
          <div className="flex-grow">
            {previewUrl ? (
              <div className="mx-auto w-80">
                {videoType === 'video' ? (
                  <iframe
                    style={{ objectFit: 'cover' }}
                    src={previewUrl}
                    width={320}
                    height={180}
                  ></iframe>
                ) : (
                  <Image
                    alt="image upload preview"
                    src={previewUrl}
                    width={360}
                    height={280}
                  />
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
                        setVideotype('video');
                      } else if (file.type[0] === 'i') {
                        setVideotype('image');
                      }
                    }
                  }}
                />
              </label>
            )}
          </div>

          {fileName ? (
            <div className="justify-top mt-4 flex gap-1.5 md:mt-0 md:flex-col">
              <Link
                href={{
                  pathname: '/exploration/visualq',
                  query: { id: fileId, ftype: videoType },
                }}
              >
                <button
                  disabled={!fileId}
                  className="w-1/2 rounded-sm bg-gray-700 px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-green-400 disabled:bg-gray-200 md:w-auto md:text-base"
                >
                  Search
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
                      .then((formData: any) => {
                        setFileId(formData[filename]['uri']);
                      });
                    console.log(
                      'File was uploaded successfully:',
                      file['name'],
                    );
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
        {fileName ? (
          <div className="justify-bottom mt-4 flex gap-1.5  md:mt-0 md:flex-col">
            {fileId ? (
              <div className="text-green-900">
                <IconTickCircle style={{ color: '#1B5E20' }} />
                Visual Search Ready
              </div>
            ) : (
              <div className="text-blue-900">
                <IconSpin spin style={{ color: '#0D47A1' }} />
                Processing...
              </div>
            )}
          </div>
        ) : (
          <div className="justify-bottom mt-4 flex gap-1.5 md:mt-0 md:flex-col">
            ...
          </div>
        )}
      </form>
    </div>
  );
};

export default MediaSearch;
