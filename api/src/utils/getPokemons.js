
const axios = require('axios');
const {Pokemon, Type } = require('../db.js') ;
const {apiUrl} = require('../utils/constans.js');

const getPokemonById = async (id) => {
    let targetPokemon;
    if(!id.match(/^[A-Za-z]+$/)){
        const pokemonInExtDb = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(p => p.data);
        targetPokemon = pokemonModelMaper(pokemonInExtDb);
    }
    else{
        targetPokemon = Pokemon.findOne({
                where: {
                    id: id
                },
                include: Type
        })
    }  
    return targetPokemon;      
}

const getAllPokemons = async () => {
    const pokemonsLinksInExtDb = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=48`).then(p => p.data.results);
    const pokemonsInExtDbProms = pokemonsLinksInExtDb.map(async function(p) {
        return axios.get(p.url).then(p => p.data);
    });
    const pokemonsInExtDb = await Promise.all(pokemonsInExtDbProms);
    
    const FEPokemons = pokemonsInExtDb.map(p => { 
        return {
            id: p.id,
            name: p.name, 
            img: p.sprites.other['official-artwork'].front_default, 
            types: p.types.map(t => t.type.name) 
        }   
    });
    return FEPokemons;
}

const getPokemonByName = async (name) => {
    let targetPokemon;
    targetPokemon = await Pokemon.findOne({
            where: {
                name: name
            },
            include: Type
    })
    if(!targetPokemon){
        const pokemonInExtDb = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(p => p.data);
        targetPokemon = pokemonModelMaper(pokemonInExtDb);
    }
    return targetPokemon;
}

const pokemonModelMaper = (pokemonInExtDb) => {
    let pokemonForFE =  {
        id: pokemonInExtDb.id,
        name: pokemonInExtDb.name, 
        img: pokemonInExtDb.sprites.other['official-artwork'].front_default, 
        types: pokemonInExtDb.types.map(t => t.type.name),
        hp: pokemonInExtDb.stats[0].base_stat,
        attack: pokemonInExtDb.stats[1].base_stat,
        defense: pokemonInExtDb.stats[2].base_stat,
        speed: pokemonInExtDb.stats[5].base_stat,
        height: pokemonInExtDb.height, 
        weight: pokemonInExtDb.weight
    }   
    return pokemonForFE;
}

module.exports = {
    getPokemonById,
    getAllPokemons,
    getPokemonByName
}