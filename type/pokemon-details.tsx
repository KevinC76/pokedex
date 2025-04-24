type NamedAPIResource = {
  name: string;
  url: string;
};

type PokemonAbility = {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
};

type PokemonMove = {
  move: NamedAPIResource;
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
};

type PokemonTypeElement = {
  slot: number;
  type: NamedAPIResource;
};

type PokemonForm = NamedAPIResource;

type GameIndex = {
  game_index: number;
  version: NamedAPIResource;
};

type HeldItem = {
  item: NamedAPIResource;
  version_details: {
    rarity: number;
    version: NamedAPIResource;
  }[];
};

type PastType = {
  generation: NamedAPIResource;
  types: PokemonTypeElement[];
};

type PastAbility = {
  generation: NamedAPIResource;
  ability: PokemonAbility;
};

export type PokemonDetails = {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: {
    latest: string;
  };
  forms: PokemonForm[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_types: PastType[];
  species: NamedAPIResource;
  sprites: {
    back_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: PokemonStat[];
  types: PokemonTypeElement[];
  weight: number;
};
