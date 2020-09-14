const express = require('express')
const morgan = require('morgan');

const lemet = require('helmet');
const helmet = require('helmet');



const server = express();

server.use(express.json);
server.use(helmet());

server.get("/", (req, res) =>{
    res.status(200).json({message: "The server is online!"})
})

module.export