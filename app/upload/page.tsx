'use client';

import type { NextPage } from 'next';
import FileUpload from '../../components/FileUpload';

import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold text-black">Upload</h1>
      <main className="py-10">
        <div className="mx-auto w-full max-w-3xl px-3">
          <FileUpload />
        </div>
      </main>
    </div>
  );
};

export default Home;
