export const getData = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151').then(
    (data) => data.json()
  );

  return res.results;
};
