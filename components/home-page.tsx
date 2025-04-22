'use client';

import { getData } from '@/app/action';

import PokemonType from '@/type/pokemon';
import { useEffect, useState } from 'react';
import Cards from './reusableComponents/cards';
import Search from './reusableComponents/search';

export default function HomePage() {
  const [data, setData] = useState<PokemonType[]>([]);
  const [search, setSearch] = useState('');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetch = async () => {
      const pokemonData = await getData();
      setData(pokemonData);
    };

    fetch();
  }, []);

  return (
    <div className="px-8 xl:px-64 py-8 ">
      <Search search={search} setSearch={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-16">
        {filteredData ? (
          filteredData.map((item) => <Cards key={item.name} url={item.url} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
