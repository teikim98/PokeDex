import { useQuery } from "react-query";
import { PokemonsResponseResult } from "../@types/api";
import { pokemonApi } from '../api/'
import PokemonCards from "../components/PokemonCards";
import styled from 'styled-components'
import { useMemo } from "react";
import { searchState } from "../store/atom"
import { useRecoilState } from "recoil";
import Header from "../components/Header";

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

  const [filterdPokemon, setFilterdPokemon] = useRecoilState(searchState);


  const pokemons = useQuery("pokemons", () => {
    return pokemonApi.getAllPokemons();
  })

  const filterPoke = useMemo(() => {
    if (filterdPokemon === "") {
      return pokemons.data?.data.results;
    }
    return pokemons.data?.data.results.filter((pokemon) => {
      return pokemon.name.includes(filterdPokemon)
    })

  }, [filterdPokemon, pokemons.data])

  if (pokemons.isLoading) {
    return <div>loading</div>;
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        {filterPoke?.map((pokemon: PokemonsResponseResult) => (
          <PokemonCards name={pokemon.name} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Home;