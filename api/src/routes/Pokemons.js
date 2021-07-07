// const router = require('express').Router();
const axios = require('axios');
const { Router } = require('express');
const router = Router ();
const {Pokemon, Type } = require('../db.js') 

router.get('/', async (req, res, next) => {
    try{
        var pokemonsInExternalDb = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        res.json(pokemonsInExternalDb.data.results);
    }catch(error){
        console.log('error.message');
    }    
});

router.post('/', async (req, res, next) => {
    // const {name, hp, attack, defense, height, weight} = req.body;
    try{
        await Type.create({
            name: 'fuego'
        })
        await Type.create({
            name: 'agua'
        })

        var fuegoId = await Type.findOne({
            where: {
                name: 'fuego'
            }
        })
        var aguaId = await Type.findOne({
            where: {
                name: 'agua'
            }
        })

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

        res.status(201).send('success');

    }catch(error){
        console.log(error);
        res.status(404).send('failed');
    }    
})

module.exports = router;