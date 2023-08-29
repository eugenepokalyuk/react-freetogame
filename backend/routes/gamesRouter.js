const axios = require('axios');
const Router = require('express');
const router = new Router();

const ApiUrlPath = process.env.ApiUrlPath;

router.post('/games');

router.get('/all', async (req, res) => {
    let temp = await axios.get(ApiUrlPath);
    console.log('temp', await temp)
    res.json(temp.data);
});

module.exports = router;