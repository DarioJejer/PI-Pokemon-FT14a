const { Router } = require('express');
const router = Router ();
const { Type } = require('../db.js');

router.get('/', async (req, res, next) => {
    try{
        return res.json(await Type.findAll());        
    }catch{
        res.status(400).send(error.message);
    }
})

module.exports = router;