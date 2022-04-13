require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const connectToDatabase = require('./database/database');

connectToDatabase();

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`🍻 Backand started at ${port}`)
});