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

  return (
    <div className="px-8 xl:px-64 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-16">
        {data ? (
          data.map((item) => <Cards key={item.name} url={item.url} />)
        ) : (
          <p>Loading...</p>
        )}
        {/* <Cards />
        <Cards />
        <Cards />
        <Cards /> */}
      </div>
    </div>
  );
}
