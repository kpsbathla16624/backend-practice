import { MongoClient } from "mongodb";
const express = require('express');
require('dotenv').config();
const body = require('body-parser');


async function start() {
    try {
        const app = express();
        const mongo = await MongoClient.connect(process.env.MONGO_URL??"");
        
        app.db = mongo.db();  

        app.use(body.json({
            limit: '1000kb'
        }));
        app.use('/', require('./routes/customer'));

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    } catch (error) {
        console.log(error);
    }
}

start();
