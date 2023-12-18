import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { searchPokemon } from "../../services/Api";

function Search() {
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        console.log(data);
    }

    return (
        <>
            <div className=" pl-4 pr-2 w-[500px] h-10 rounded-full flex gap-3 bg-[#515151] items-center justify-between ">
                <input id="search" onChange={onChange} className=" w-full bg-inherit text-white focus:outline-none placeholder-gray-300" type="text" placeholder="Buscar Pokémon..." />
                <FontAwesomeIcon onClick={onClick} icon={faMagnifyingGlass} style={{color: "white",}}  className=" h-5 bg-[#d3d2d270] rounded-full p-[6px]"/>
            </div>
        </>
    )
}

export default Search
