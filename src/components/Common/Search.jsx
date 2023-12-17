function Search() {
    return (
        <>
            <div>
                <div className=" px-3 w-96 h-8 rounded-full flex gap-3 bg-[#515151] items-center justify-between ">
                    <label htmlFor="search"><img className="h-[20px]" src="https://img.icons8.com/android/24/000000/search.png" alt="Icono de busqueda" /></label>
                    <input id="search" className=" w-full bg-inherit text-white focus:outline-none placeholder:text-white" type="text" placeholder="Buscar Pokémon..." />
                </div>
            </div>
        </>
    )
}

export default Search
