import React, { useState, useEffect } from 'react';
import Header from './components/App/Header';
import PokemonFilter from './components/Pokemon/PokemonFilter';
import PokemonList from './components/Pokemon/PokemonList';
import { getPokemonData, getPokemons } from './services/Api';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(18, 18 * page);
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 18));
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Header />
      <div className='w-[100%] bg-[#1f1f1f] flex p-5 pt-[105px] gap-8 min-h-screen'>
        <PokemonFilter />
        <PokemonList pokemons={pokemons} loading={loading}  page={page} setPage={setPage} total={total} />
      </div>
    </div>
  );
}

export default App;
