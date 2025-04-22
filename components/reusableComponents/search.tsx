import React from 'react';
import { IoMdSearch } from 'react-icons/io';

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <div className="pt-8 pb-16 flex items-center justify-center">
      <div className="flex items-center justify-center w-full max-w-2xl gap-4">
        <IoMdSearch className=" text-gray-400 ml-4" size={36} />
        <input
          type="text"
          className="block grow py-4 px-6 text-md text-white placeholder:text-gray-400 focus:outline-none border-3 border-white rounded-full bg-gray-800  focus:ring-2 focus:ring-red-pokemonball focus:border-red-pokemonball"
          placeholder="Search for a Pokemon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
