'use client';

import React, { useEffect, useState } from 'react';
import { getPokemonData } from './actions';
import { PokemonDetails, typeProps } from '@/type/pokemon-details';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Elements from '@/components/reusableComponents/elements';
import { PiBarbell } from 'react-icons/pi';
import { CiRuler } from 'react-icons/ci';
import Link from 'next/link';

export default function PokemonDetail() {
  const params = useParams<{ pokemonName: string }>();

  const defaultPokemon: PokemonDetails = {
    abilities: [],
    base_experience: 0,
    cries: { latest: '' },
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_abilities: [],
    past_types: [],
    species: {
      name: '',
      url: '',
    },
    sprites: {
      back_default: '',
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    stats: [],
    types: [],
    weight: 0,
  };

  const [pokemon, setPokemon] = useState<PokemonDetails>(defaultPokemon);

  const types = pokemon.types.map((t: typeProps) => t.type.name);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonData(`${params.pokemonName}`);
      setPokemon(data);
    };

    fetchData();
  }, [params]);

  return (
    <>
      {pokemon != defaultPokemon ? (
        <div className="px-8 xl:px-64 py-8">
          <Link href="/" className="text-lg text-red-pokemonball font-semibold">
            {' '}
            &#8249; back
          </Link>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-4">
            {/* Left section */}
            <div className="order-2 xl:order-1">
              <h1 className="text-4xl text-center sm:text-left sm:text-6xl font-bold capitalize text-white">
                {pokemon.name}
              </h1>
              <p className="text-white/90 my-2 text-lg text-center sm:text-left">
                #{String(pokemon.order).padStart(3, '0')}
              </p>

              {/* Types */}
              <div className="flex gap-2 mb-4 items-center justify-center sm:justify-start">
                {types.map((type: string, index: number) => (
                  <Elements key={index} type={type} />
                ))}
              </div>

              {/* Height & Weight */}
              <div className="flex items-center justify-center sm:items-start sm:justify-start gap-8 my-4 text-white text-xl">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <CiRuler size={32} />
                  <p className="">
                    Height:{' '}
                    <span className="font-bold">{pokemon.height / 10}</span> m
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <PiBarbell size={32} />
                  <p>
                    Weight:{' '}
                    <span className="font-bold">{pokemon.weight / 10}</span> kg
                  </p>
                </div>
              </div>

              <hr className="hidden md:block text-white my-4" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <hr className="block text-white sm:hidden" />
                {/* Base Stats */}
                <div className="text-white flex flex-col items-center justify-center gap-1 sm:block sm:items-start sm:justify-start">
                  <h2 className="font-semibold text-xl mb-1">Base Stats</h2>

                  {pokemon.stats.map((stat, index) => (
                    <p key={index} className="text-lg flex items-center gap-2">
                      &#x2022; {stat.stat.name.toUpperCase()}: {stat.base_stat}
                    </p>
                  ))}
                </div>
                <hr className="block text-white sm:hidden" />
                {/* Abilities */}
                <div className="text-white flex flex-col items-center justify-center gap-1 sm:block sm:items-start sm:justify-start">
                  <h2 className="font-semibold text-xl mb-1">Abilities</h2>

                  {pokemon.abilities.map((abilityObj, index) => (
                    <p key={index} className="text-lg flex items-center gap-2">
                      &#x2022; {abilityObj.ability.name}
                    </p>
                  ))}
                </div>
                <hr className="block text-white sm:hidden" />
              </div>
              
              <hr className="hidden md:block text-white my-4" />

              {/* Cry Audio */}
              {pokemon.cries.latest && (
                <div className="mt-4">
                  <h2 className="font-semibold text-xl text-white mb-4">Cry</h2>
                  <audio controls src={pokemon.cries.latest}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>

            {/* Right section (Image) */}
            <div className="flex justify-center items-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 p-8 rounded-2xl shadow-xl relative order-1 xl:order-2">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400 opacity-30 rounded-2xl z-0" />
              <Image
                width={500}
                height={500}
                alt={`${pokemon.name} image`}
                src={pokemon.sprites.other['official-artwork'].front_default}
                className="relative z-10 rounded-xl"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center ">
          <div className="text-2xl text-white font-bold mt-24">Loading...</div>
        </div>
      )}
    </>
  );
}
