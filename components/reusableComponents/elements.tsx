import React from 'react';
import { IoIosLeaf } from 'react-icons/io';

function GrassPoisonElement() {
  return (
    <div className="flex flex-col items-center gap-2 font-sans font-bold uppercase text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-center gap-2 bg-[#78C850] px-4 py-2 rounded-full w-fit">
        <IoIosLeaf className="text-white text-2xl" />
        <p className="text-center flex items-center justify-center h-full">
          GRASS
        </p>
      </div>
    </div>
  );
}

export default GrassPoisonElement;
