const Router = require('express');
const router = new Router();
const gamesRouter = require('./gamesRouter')

router.use('/games', gamesRouter);


module.exports = router;