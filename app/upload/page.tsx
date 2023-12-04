'use client';

import type { NextPage } from 'next';
import FileUpload from '../../components/FileUpload';
import AppContextProvider from '../../components/helpers/context';

import React, { useState } from 'react';

const Home: NextPage = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold text-black">Upload</h1>
      <main className="py-10">
        <div className="mx-auto w-full max-w-3xl px-3">
          <AppContextProvider>
            <FileUpload />
          </AppContextProvider>
        </div>
      </main>
    </div>
  );
};

export default Home;
