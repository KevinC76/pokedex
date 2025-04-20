'use client';

import { useState } from 'react';

interface book {
  name: string;
  page: number;
}

type LibraryType = {
  books: book[];
};

function Library({ books }: LibraryType) {
  const [search, setSearch] = useState<string>('');

  const filteredBooks =
    search === ''
      ? books
      : books.filter((curr) =>
          curr.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Input search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded-md"
      />

      {filteredBooks.length > 0 ? (
        filteredBooks.map((curr) => (
          <div key={curr.name} className="border rounded p-2">
            <p className="font-semibold">{curr.name}</p>
            <p>Halaman: {curr.page}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Buku tidak ditemukan.</p>
      )}
    </div>
  );
}

export default Library;
