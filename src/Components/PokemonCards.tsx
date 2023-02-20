import useFindPokemon from "../Hooks/findPokemons"
import styled from 'styled-components'

type PokemonCardProps = {
    name: string
}

const PokemonCard = styled.div`
    width:400px;
    height: auto;
    padding: 30px;
    margin: 10px;
    border: 2px;
    border-style: solid;
    border-radius: 30px;
`
const PokemonCardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transition: transform .2s;
   & img {
    width : 200px;
    height: 200px;
   }
   &:hover{
    transform: scale(1.1);
   }
`

const PokemonCards: React.FC<PokemonCardProps> = ({ name }) => {

    const pokemon = useFindPokemon(name);

    const otherSprites = pokemon.data?.data.sprites.other;


    if (pokemon.isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <PokemonCard>
            <PokemonCardWrapper>
                <img
                    src={
                        otherSprites?.dream_world.front_default ||
                        otherSprites?.["official-artwork"].front_default
                    }
                    alt={pokemon.data?.data.name}
                />
                <h2 className=" font-bold underline">{pokemon.data?.data.name}</h2>
            </PokemonCardWrapper>
        </PokemonCard>
    )
}

export default PokemonCards