'use strict';

const express = require("express");

const server = express();

server.get('/home', (req, res)=> res.send("Welcome to WWYLTE"));

module.exports = server;