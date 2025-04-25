export const getData = async () => {
  try {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?limit=151'
    ).then((data) => data.json());

    return res.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
