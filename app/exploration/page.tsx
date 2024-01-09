'use client';

import type { NextPage } from 'next';
import MediaGraph from '../../components/MediaGraph';

import React from 'react';

const Home: NextPage = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-center text-xl font-bold text-black">
        Explore my database
      </h1>
      <input
        type="search"
        id="default-search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search tags..."
        required
      />
      <br />
      {/* <div className="mx-auto w-full max-w-3xl px-3"> */}
      <MediaGraph />
      {/* </div> */}
    </div>
  );
};

export default Home;
