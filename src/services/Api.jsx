import axios from "axios";

export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
        throw error;
    }
}

export const getPokemons = async (limit=18, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
        throw error;
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        
    }
}