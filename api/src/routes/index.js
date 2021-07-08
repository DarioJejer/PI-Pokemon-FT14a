const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokemonsRoute = require('./Pokemons.js');
const TypesRoute = require('./Types.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', PokemonsRoute);
router.use('/types', TypesRoute);


module.exports = router;
