const { config } = require("dotenv");
const {start} =require("./src/server");

config();

start(3000);