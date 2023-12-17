function PokemonFilter() {
    return (
        <div>
            <div className="flex flex-col gap-2 bg-[#515151] text-white rounded-lg p-5">
                {/* Crea un checkbox para cada tipo de Pokémon */}
                <label className=" p-1 bg-[#212121] rounded-full w-52">
                    <input type="checkbox" value="grass"/>
                    Planta
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="fire"/>
                    Fuego
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="water"/>
                    Agua
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="electric"/>
                    Rayo
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="psychic"/>
                    Psíquico
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="fighting"/>
                    Lucha
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="dark"/>
                    Oscura
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="steel"/>
                    Metálica
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="normal"/>
                    Incolora
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="fairy"/>
                    Hada
                </label>
                <label className=" p-1 bg-[#212121] rounded-full">
                    <input type="checkbox" value="dragon"/>
                    Dragón
                </label>
            </div>
        </div>
    )
}

export default PokemonFilter
