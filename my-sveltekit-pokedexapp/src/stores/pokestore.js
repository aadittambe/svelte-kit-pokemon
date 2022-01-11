import { writable } from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        };
    });

    pokemon.set(loadedPokemon);
};
fetchPokemon();


// https://www.youtube.com/watch?v=UU7MgYIbtAk

// pick up from tailwind css setup