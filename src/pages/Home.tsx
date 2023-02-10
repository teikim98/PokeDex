import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from "react-query";
import { fetchPokemons } from '../api/api';

export interface Result {
    name: string;
    url: string;
}

export interface IPokemon {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
}


const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: #afafaf;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: #7878ff;
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: #7878ff;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

function Home() {

    const { isLoading, data } = useQuery<IPokemon[]>("allPokemons", fetchPokemons);

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinsList>
                    {data?.results.map((poke) => (
                        <h1>{poke.name}</h1>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}

export default Home;