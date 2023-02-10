const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

export function fetchPokemons() {
  return fetch(`${BASE_URL}/`).then((response) => response.json());
}
