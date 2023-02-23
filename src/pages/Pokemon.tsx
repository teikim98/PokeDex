import { useNavigate, useParams } from "react-router";
import PokemonCards from "../components/PokemonCards";
import useFindPokemon from "../Hooks/findPokemons";


function Pokemon() {

    let { pokemon: param } = useParams();

    const pokemon = useFindPokemon(param);
    const pokeDetail = pokemon.data?.data.name;

    return (
        <div>
            <PokemonCards name={pokeDetail} />
        </div>
    );
}

export default Pokemon;