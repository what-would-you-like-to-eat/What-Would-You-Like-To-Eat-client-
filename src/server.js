'use strict';

const express = require("express");

const server = express();

server.get('/home', (req, res)=> res.send("Welcome to WWYLTE"));

module.exports={
    server: server,
    start: (port)=>{
        server.listen(port,()=> console.log(`listening on port ${port}`));
    }
}

