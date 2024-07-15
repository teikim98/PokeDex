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
  }) //pokeApi 에서 포켓몬 받아오기

  const filterPoke = useMemo(() => {
    if (filterdPokemon === "") {
      return pokemons.data?.data.results;
    }
    return pokemons.data?.data.results.filter((pokemon) => {
      return pokemon.name.includes(filterdPokemon)
    }) // 검색결과를 포함하는 포켓몬만 출력

  }, [filterdPokemon, pokemons.data])

  if (pokemons.isLoading) {
    return <div>is loading</div>;
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