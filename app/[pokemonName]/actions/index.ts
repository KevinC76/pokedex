export const getPokemonData = async (name: string) => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.json()
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
