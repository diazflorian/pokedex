import Pagination from "../Common/Pagination";
import Search from "../Common/Search"
import PokemonCard from "./PokemonCard";

const PokemonList = (props) =>  {
    const {pokemons, page, setPage, total, loading} = props;
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }

    return (
        <div className=" w-[100%]">
            <Pagination page={page + 1} totalPages={total} onLeftClick={lastPage} onRightClick={nextPage} />

            {loading? <div className=" mt-5 text-white text-xl text-center">Cargando pokemones...</div>
            :
            <div className=" mt-5 grid grid-cols-6 w-full gap-8">
                {pokemons.map((pokemon, index) => {
                    return (
                        <PokemonCard pokemon={pokemon} key={pokemon.name} />
                    )
                })}
            </div>
            }
        </div>
    )
}

export default PokemonList
