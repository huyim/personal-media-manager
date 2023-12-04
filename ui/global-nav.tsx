'use client';

import { demos, type Item } from '#/lib/demos';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-gray-300 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <h3 className="font-semibold tracking-wide text-black group-hover:text-gray-400">
            Personal Media Explorer
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
          <Upload />

          {/* <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search tags..."
            required
          /> */}
          <Explore />
          <Editor />
        </nav>
      </div>
    </div>
  );
}

function Upload() {
  const segment = useSelectedLayoutSegment();
  const isActive = 'upload' === segment;

  return (
    <Link
      href={`/${'upload'}`}
      className={clsx(
        'block rounded-md  px-3 py-2 text-center text-sm font-medium hover:text-gray-100',
        {
          ' bg-orange-500 text-white ': !isActive,
          'bg-orange-800 text-white outline outline-offset-1 outline-orange-800 ':
            isActive,
        },
      )}
    >
      {'UPLOAD'}
    </Link>
  );
}

function Explore() {
  const segment = useSelectedLayoutSegment();
  const isActive = 'exploration' === segment;

  return (
    <Link
      // onClick={close}
      href={`/${'exploration'}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-100',
        {
          'text-gray-600 hover:bg-blue-800': !isActive,
          'bg-blue-800 text-white': isActive,
        },
      )}
    >
      {'Exploration'}
    </Link>
  );
}

function Editor() {
  const segment = useSelectedLayoutSegment();
  const isActive = 'editor' === segment;

  return (
    <Link
      // onClick={close}
      href={`/${'editor'}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-100',
        {
          'text-gray-600 hover:bg-blue-800': !isActive,
          'bg-blue-800 text-white': isActive,
        },
      )}
    >
      {'Editor'}
    </Link>
  );
}

// function GlobalNavItem({
//   item,
//   close,
// }: {
//   item: Item;
//   close: () => false | void;
// }) {
//   const segment = useSelectedLayoutSegment();
//   const isActive = item.slug === segment;

//   return (
//     <Link
//       onClick={close}
//       href={`/${item.slug}`}
//       className={clsx(
//         'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-100',
//         {
//           'text-gray-600 hover:bg-blue-800': !isActive,
//           'bg-blue-800 text-white': isActive,
//         },
//       )}
//     >
//       {item.name}
//     </Link>
//   );
// }
