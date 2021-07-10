const { Router } = require('express');
const router = Router ();
const {Pokemon, Type } = require('../db.js');
const {getPokemonById, getAllPokemons, getPokemonByName} = require('../utils/getPokemons.js');
const { Op } = require('sequelize');

router.get('/', async (req, res, next) => {
    const {name} = req.query;
    try{
        if(name){
            return res.json(await getPokemonByName(name));      
        }
        return res.json(await getAllPokemons());        
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
    const {name, hp, attack, defense, speed, typesIds, height, weight} = req.body;
    try{
        const newPokemon = await Pokemon.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight
        })

        const types = await Type.findAll({
            where: {
                id: {
                    [Op.in]: typesIds
                }
            }
        })

        await newPokemon.setTypes(types);

        const newObj = await Pokemon.findOne({
            where: {
                name: name
            },
            include: Type
        })
        res.status(201).json(newObj);

    }catch(error){
        res.status(400).send(error.message);
    }    
})

module.exports = router;