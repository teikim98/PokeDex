import { useQuery } from "react-query";
import { PokemonsResponseResult } from "../@types/api";
import { pokemonApi } from '../api/'
import PokemonCards from "../Components/PokemonCards";

const Home: React.FC<{}> = () => {

  const pokemons = useQuery("pokemons", () => {
    return pokemonApi.getAllPokemons();
  })

  if (pokemons.isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline red">Home</h1>
      {pokemons.data?.data.results.map((pokemon: PokemonsResponseResult) => (
        <PokemonCards name={pokemon.name} />
      ))}

    </div>
  )
}

export default Home;