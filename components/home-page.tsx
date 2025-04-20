'use client';

import { getData } from '@/app/action';

import PokemonType from '@/type/pokemon';
import { useEffect, useState } from 'react';
import Cards from './reusableComponents/cards';

export default function HomePage() {
  const [data, setData] = useState<PokemonType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const pokemonData = await getData();
      setData(pokemonData);
    };

    fetch();
  }, []);

  console.log('ini dari page.tsx', data);

  return (
    <div className="px-64 py-8 ">
      <div className="grid grid-cols-3 gap-16">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
