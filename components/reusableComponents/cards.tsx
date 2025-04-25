'use client';

import React, { useEffect, useState } from 'react';
import Elements from './elements';
import { PiLightning, PiBarbell } from 'react-icons/pi';
import { CiRuler } from 'react-icons/ci';
import Image from 'next/image';
import { PokemonDetails, typeProps } from '@/type/pokemon-details';

type CardsProps = {
  url: string;
};

function Cards({ url }: CardsProps) {
  const defaultPokemon: PokemonDetails = {
    abilities: [],
    base_experience: 0,
    cries: {
      latest: '',
    },
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

  // Use it like this
  const [pokemon, setPokemon] = useState<PokemonDetails>(defaultPokemon);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [url]);

  if (loading) {
    return (
      <div className="w-full p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl shadow-sm flex items-center justify-center">
        <p className="text-gray-500 text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (!pokemon) return null;

  const height = (pokemon.height / 10).toFixed(2);
  const weight = (pokemon.weight / 10).toFixed(2);
  const imageUrl = pokemon.sprites.other['official-artwork'].front_default;
  const types = pokemon.types.map((t: typeProps) => t.type.name);

  return (
    <div className="w-full p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl shadow-sm">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Image width={150} height={150} alt="pokemon image" src={imageUrl} />
        <h1 className="font-bold text-xl">&#x2022; {pokemon.name} &#x2022;</h1>

        <div className="flex gap-4">
          {types.map((type: string, index: number) => (
            <Elements key={index} type={type} />
          ))}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <p className="font-bold text-xl">{height} M</p>
            <div className="flex items-center justify-center gap-1">
              <CiRuler size={24} />
              <p className="text-lg">Height</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <p className="font-bold text-xl">{weight} KG</p>
            <div className="flex items-center justify-center gap-1">
              <PiBarbell size={24} />
              <p className="text-lg">Weight</p>
            </div>
          </div>
        </div>

        <a href={`/${pokemon.name}`} className="w-full">
          <div className="flex justify-center items-center gap-1 bg-black-button text-white py-2 px-4 w-full rounded-md">
            <PiLightning />
            <p>Details</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Cards;
