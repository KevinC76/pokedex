'use client';

import React, { useEffect, useState } from 'react';
import { getPokemonData } from './actions';
import { PokemonDetails } from '@/type/pokemon-details';
import { useParams } from 'next/navigation';

export default function PokemonDetail() {
  const params = useParams<{ pokemonName: string }>();

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

  const [pokemon, setPokemon] = useState<PokemonDetails>(defaultPokemon);

  useEffect(() => {
    const fethData = async () => {
      const data = await getPokemonData(`${params.pokemonName}`);
      setPokemon(data);
    };

    fethData();
  }, [params]);

  return <div className="px-8 xl:px-64 py-8">page</div>;
}
