const { Router } = require('express');
const router = Router();
const { Pokemon } = require('../db.js');

router.get('/', async (req, res, next) => {
    try{
        res.json(await Pokemon.findAll());

    }catch{
        res.status(400).send(error.message);
    }
})

module.exports = router;