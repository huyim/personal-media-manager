'use client';

import type { NextPage } from 'next';
import AddTag from '../../components/AddTag';
import AppContextProvider from '../../components/helpers/context';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  const [image, setImage] = useState('Loading');

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold text-black">Add Tags</h1>
      <main className="py-10">
        <div className="mx-auto w-full max-w-3xl px-3">
          <AppContextProvider>
            <AddTag />
          </AppContextProvider>
        </div>
      </main>
    </div>
  );
};

export default Home;
