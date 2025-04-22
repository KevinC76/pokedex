'use client';

import { getData } from '@/app/action';
import PokemonType from '@/type/pokemon';
import { useEffect, useState } from 'react';
import Cards from './reusableComponents/cards';
import Search from './reusableComponents/search';

export default function HomePage() {
  const [data, setData] = useState<PokemonType[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetch = async () => {
      const pokemonData = await getData();
      setData(pokemonData);
    };

    fetch();
  }, []);

  // Reset page to 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className="px-8 xl:px-64 py-8">
      <Search search={search} setSearch={setSearch} />

      {data.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-16">
            {currentData.length > 0 ? (
              currentData.map((item) => (
                <Cards key={item.name} url={item.url} />
              ))
            ) : (
              <div className="flex items-center justify-center w-full h-full col-span-3">
                <h1 className="text-center text-white text-2xl font-bold">
                  Pokemon not found
                </h1>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full col-span-3">
          <h1 className="text-center text-white text-2xl font-bold">
            Loading...
          </h1>
        </div>
      )}
    </div>
  );
}
