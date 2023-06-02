const express = require('express');
const app = express();
const port = 3001;

const connection = require('./connection')
app.use(express.json())
app.listen(port, "0.0.0.0",() => console.log(`Example app listening on port ${port} :)!`))
