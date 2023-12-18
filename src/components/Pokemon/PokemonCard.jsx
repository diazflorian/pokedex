const PokemonCard = (props) =>  {
    const {pokemon} = props;
    return (
        <div className="text-white capitalize">
            <div className="bg-white rounded-2xl w-[100%] flex items-center justify-center">
                <img src={pokemon.sprites.front_default} alt={"Imagen de " + pokemon.name} />
            </div>
            <div>
                <div className="flex justify-between mt-1">
                    <h3>{pokemon.name}</h3>
                    <h2># {pokemon.id}</h2>
                </div>
                <div>
                    {pokemon.types.map((type, index) => {
                        <div key={index}>{type.name}</div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default PokemonCard;