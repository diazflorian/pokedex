import React, { useState, useEffect } from 'react';
import Header from './components/App/Header';
import PokemonFilter from './components/Pokemon/PokemonFilter';
import PokemonList from './components/Pokemon/PokemonList';
import { getPokemonData, getPokemons } from './services/Api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Header />
      <div className='w-[100%] bg-[#1f1f1f] flex p-5 pt-[105px] gap-8 min-h-screen'>
        <PokemonFilter />
        <PokemonList pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
