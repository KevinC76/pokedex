import React from 'react';

type ElementsProps = {
  type: string;
};

const typeToColorVar = {
  normal: '--color-normal',
  fire: '--color-fire',
  water: '--color-water',
  electric: '--color-electric',
  grass: '--color-grass',
  ice: '--color-ice',
  fighting: '--color-fighting',
  poison: '--color-poison',
  ground: '--color-ground',
  flying: '--color-flying',
  psychic: '--color-psychic',
  bug: '--color-bug',
  rock: '--color-rock',
  ghost: '--color-ghost',
  dragon: '--color-dragon',
  dark: '--color-dark',
  steel: '--color-steel',
  fairy: '--color-fairy',
};

function Elements({ type }: ElementsProps) {
  const lowerType = type.toLowerCase();
  const colorVar =
    typeToColorVar[lowerType as keyof typeof typeToColorVar] ||
    '--color-normal';

  return (
    <div className="flex flex-col items-center gap-2 font-sans font-bold uppercase text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">
      <div
        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full w-fit"
        style={{ backgroundColor: `var(${colorVar})` }}
      >
        <p className="text-center flex items-center justify-center h-full">
          {type}
        </p>
      </div>
    </div>
  );
}

export default Elements;
