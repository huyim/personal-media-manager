import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const MediaSearch = () => {
  const [input, setInput] = useState();

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
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
  );
};

export default MediaSearch;
