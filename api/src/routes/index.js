const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activity = require('./activity.js');
const countries = require('./countries.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activity', activity);
router.use('/countries', countries);

module.exports = router;
