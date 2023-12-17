import Header from './components/App/Header'
import PokemonFilter from './components/Pokemon/PokemonFilter'
import PokemonList from './components/Pokemon/PokemonList'

function App() {
  return (
    <div>
      <Header />
      <div className=' w-[100%] bg-[#1f1f1f] flex p-5 pt-28 gap-8 h-screen'>
        <PokemonFilter />
        <PokemonList />
      </div>
    </div>
  )
}

export default App
