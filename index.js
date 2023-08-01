<<<<<<< HEAD
'use strict';

const express = require("express");
const axios = require("axios");
const app = express();

const YELP_API_URL = "https://api.yelp.com/v3/businesses/search";
const YELP_API_KEY= process.env.API_KEY;
app.use(express.json());

app.get("/api/yelp", async(req,res)=>{
    try{
        const { term, location, limit }=req.query;
        const url = `${YELP_API_URL}?term=${term}&location=${location}&limit=${limit}`;
        const headers ={
            Authorization: `Bearer ${YELP_API_KEY}`,
        };

        const response = await axios.get(url, { headers });
        res.json(response.data);
    } catch(error) {
        console.error("Error with Data", error);
        res.status(500).json({error:"Error fetching data"});
    }
});

    const port = 3000;
    app.listen(port,()=>console.log(`listening on ${port}`))
=======
require('dotenv').config();
const { start } =require("./src/server");

start();
>>>>>>> refs/remotes/origin/main
