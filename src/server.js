'use strict';

const express = require("express");

const app = express();

app.get('/home', (req, res)=> res.send("Welcome to WWYLTE"));

function start () {
    app.listen(process.env.PORT || 3001)
    console.log(`Listening on port ${process.env.PORT}`);
}

module.exports= { start };

