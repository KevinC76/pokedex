import React from 'react';


function AboutPage() {
  return (
    <div className="p-8 sm:px-32 py-8 xl:px-64 text-white">
      {/* header */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-black text-4xl sm:text-6xl text-center">About Page</h1>
        <p className="text-lg text-center text-white/80">
          Discover, learn, and explore the world of Pokémon — one entry at a
          time.
        </p>
      </div>
      {/* what is this web? */}
      <div className="pt-16 flex flex-col justify-center items-center gap-4">
        <h1 className="font-black text-3xl sm:text-6xl text-center">
          What This Site Is About
        </h1>
        <p className="text-lg text-center text-white/80">
          This website is a fan-made Pokédex where you can explore detailed
          information about every Pokémon — including their types, stats,
          evolutions, abilities, and more. Whether you&apos;re a veteran trainer
          or just getting started, this site is built to help you learn and
          enjoy the world of Pokémon.
        </p>
      </div>
      {/* 3. Why I Made This Site (adds a personal touch!) */}
      <div className="pt-16 flex flex-col justify-center items-center gap-4">
        <h1 className="font-black text-3xl sm:text-6xl text-center">
          Why I Made This Site
        </h1>
        <p className="text-lg text-center text-white/80">
          As a Pokémon fan and web developer, I created this site as a fun way
          to combine my love for Pokémon with my passion for coding. The goal is
          to offer a clean, easy-to-use, and beautifully designed Pokédex that
          fans of all ages can enjoy.
        </p>
      </div>
      {/* quotes */}
      <div className="pt-16 flex flex-col gap-1 items-center justify-center">
        <p className="text-2xl font-bold">Gotta catch &apos;em all!</p>
        <p>
          credits to:{' '}
          <a href="https://pokeapi.co/" className="text-red-400 underline">
            PokéAPI
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
