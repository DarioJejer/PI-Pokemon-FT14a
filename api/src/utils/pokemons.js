
const axios = require('axios');


let getPokemonById = async (id) => {
    let targetPokemon;
    if(!id.match(/^[A-Za-z]+$/)){
        let pokemonInExtDb = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(p => p.data);
        targetPokemon =  {
            id: pokemonInExtDb.id,
            name: pokemonInExtDb.name, 
            img: pokemonInExtDb.sprites.other['official-artwork'].front_default, 
            types: pokemonInExtDb.types.map(t => t.type),
            hp: pokemonInExtDb.stats[0].base_stat,
            attack: pokemonInExtDb.stats[1].base_stat,
            defense: pokemonInExtDb.stats[2].base_stat,
            speed: pokemonInExtDb.stats[5].base_stat,
            height: pokemonInExtDb.height, 
            weight: pokemonInExtDb.weight
        }   
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

module.exports = {
    getPokemonById
}