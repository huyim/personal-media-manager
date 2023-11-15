import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function App() {
  return (
    <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
      <div className="mt-4 flex justify-center gap-1.5 text-black md:mt-0 md:flex-col">
        Tags
      </div>
      <div className="mx-auto w-80">Some tags</div>
    </div>
  );
}
