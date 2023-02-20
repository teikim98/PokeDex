import { ReactNode } from "react";
import useFindPokemon from "../Hooks/findPokemons";

type PokemonCardProps = {
    name: string
}

const PokemonCards: React.FC<PokemonCardProps> = ({ name }) => {

    const pokemon = useFindPokemon(name);

    const otherSprites = pokemon.data?.data.sprites.other;


    if (pokemon.isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <img
                src={
                    otherSprites?.dream_world.front_default ||
                    otherSprites?.["official-artwork"].front_default
                }
                alt={pokemon.data?.data.name}
            />
            <h2 className=" font-bold underline">{pokemon.data?.data.name}</h2>
        </div>
    )
}

export default PokemonCards