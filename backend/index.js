require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);


app.listen(PORT, () => {
    console.log(`FreeToGame server started on http://localhost:${PORT}`)
})