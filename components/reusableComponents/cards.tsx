import React from 'react';
import Elements from './elements';
import { PiLightning, PiBarbell } from 'react-icons/pi';
import { CiRuler } from 'react-icons/ci';
import Image from 'next/image';

function Cards() {
  return (
    <div className="w-full p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl shadow-sm">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image
          width={150}
          height={150}
          alt="pokemon image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        />
        <h1 className="font-bold text-xl">&#x2022; Bulbasaur &#x2022;</h1>
        <div className="flex gap-4">
          <Elements />
          <Elements />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <p className="font-bold text-xl">0.78 M</p>
            <div className="flex items-center justify-center gap-1">
              <CiRuler size={24} />
              <p className="text-lg">Height</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <p className="font-bold text-xl">13 KG</p>
            <div className="flex items-center justify-center gap-1">
              <PiBarbell size={24} />
              <p className="text-lg">Weight</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 bg-black-button text-white py-2 px-4 w-full rounded-md">
          <PiLightning />
          <a href="#">Details</a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
