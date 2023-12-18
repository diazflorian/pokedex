import Search from "../Common/Search"
import PokemonCard from "./PokemonCard";

const PokemonList = (props) =>  {
    const {pokemons} = props;
    return (
        <div className=" w-[]">
            <Search />
            <div className=" mt-5 grid grid-cols-7 w-full gap-10">
                {pokemons.map((pokemon, index) => {
                    return (
                        <PokemonCard pokemon={pokemon} key={pokemon.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default PokemonList
