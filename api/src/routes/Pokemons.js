// const router = require('express').Router();
const axios = require('axios');
const { Router } = require('express');
const router = Router ();
const {Pokemon, Type } = require('../db.js') ;
const {apiUrl} = require('./constans.js');
const {getPokemonById} = require('../utils/pokemons.js')

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
    try{
        return res.json(await getPokemonById(id));        
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