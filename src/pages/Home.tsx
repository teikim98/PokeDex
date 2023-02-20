import { useQuery } from "react-query";
import { PokemonsResponseResult } from "../@types/api";
import { pokemonApi } from '../api/'
import PokemonCards from "../components/PokemonCards";
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  padding : 0;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`

const Home: React.FC<{}> = () => {

  const pokemons = useQuery("pokemons", () => {
    return pokemonApi.getAllPokemons();
  })

  if (pokemons.isLoading) {
    return <div>loading</div>;
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold underline red">Pokemons</h1>
      <Wrapper>
        {pokemons.data?.data.results.map((pokemon: PokemonsResponseResult) => (
          <PokemonCards name={pokemon.name} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Home;