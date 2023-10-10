const axios = require('axios');
const Router = require('express');
const router = new Router();

const ApiUrlPath = process.env.ApiUrlPath;

router.post('/games');

router.get('/all', async (req, res) => {
    try {
        const endpoint = '/games';
        let temp = await axios.get(ApiUrlPath + endpoint);
        res.json(temp.data);
    } catch (error) {
        // console.log(error)
    }
});

router.get('/game', async (req, res) => {
    try {
        const endpoint = '/game';
        const id = req.query.id;
        if (id) {
            let temp = await axios.get(ApiUrlPath + `${endpoint}?id=${id}`);
            res.json(temp.data);
        }
    } catch (error) {
        // console.log(error)
    }
});

module.exports = router;