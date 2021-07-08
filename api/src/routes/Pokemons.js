// const router = require('express').Router();
const axios = require('axios');
const { Router } = require('express');
const router = Router ();
const {Pokemon, Type } = require('../db.js') ;
const {apiUrl} = require('./constans.js');

router.get('/', async (req, res, next) => {
    try{
        let pokemonsLinksInExtDb = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`).then(p => p.data.results);
        let pokemonsInExtDb = pokemonsLinksInExtDb.map(async function(p) {
            return axios.get(p.url).then(p => p.data);
        });
        pokemonsInExtDb = await Promise.all(pokemonsInExtDb);
        
        FEPokemons = pokemonsInExtDb.map(p => { 
            return {
                name: p.name, 
                img: p.sprites.other['official-artwork'].front_default, 
                type: p.types.map(t => t.type.name) 
            }   
        });
        return res.json(FEPokemons);        
    }catch(error){
        res.status(400).send(error.message);
    }    
});

router.get('/:id', async (req, res, next) => {
    const {id} = req.params;
    console.log(id);
    console.log(typeof id);
    try{
        let targetPokemon;
        if(!id.match(/^[A-Za-z]+$/)){
            console.log(typeof `https://pokeapi.co/api/v2/pokemon/${id}`);
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
        return res.json(targetPokemon);        
    }catch(error){
        res.status(400).send(error.message);
    }    
});

router.post('/', async (req, res, next) => {
    // const {name, hp, attack, defense, height, weight} = req.body;
    try{
        var fuegoId = await Type.create({
            name: 'fuego'
        })
        var aguaId = await Type.create({
            name: 'agua'
        })

        // var fuegoId = await Type.findOne({
        //     where: {
        //         name: 'fuego'
        //     }
        // })
        // var aguaId = await Type.findOne({
        //     where: {
        //         name: 'agua'
        //     }
        // })

        const newPokemon = await Pokemon.create({
            name: 'pikachu',
            hp: 15,
            attack: 10,
            defense: 2,
            speed: 1,
            height:2,
            weight: 5
        })

        await newPokemon.setTypes([fuegoId, aguaId]);

        var result = await Pokemon.findOne({
            where: {
                name: 'pikachu'
            },
            include: Type
        })
        res.status(201).json(result);

    }catch(error){
        res.status(400).send(error.message);
    }    
})

module.exports = router;