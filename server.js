const express = require("express");
//Express is a web application framework - it sits on top of Node web server module
//It is essentially React - but for the backend!
//ADDS EXTRA FUNCTIONALITY!!!
//Routing
//Middleware support
//A simple API

const showsRouter = require("./data/shows/showsRouter");
const charactersRouter = require("./data/characters/charactersRouter");
//Node just lets us run JavaScript outside of a browser - runtime environment

const helmet = require("helmet");
//helmet = middleware
// can change the request or the response objects - but it doesn't have to
// helmet adds headers for security to your request

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ message: "The server is online!" });
});
server.use("/api/shows", showsRouter);
server.use("/api/characters", charactersRouter);
module.exports = server;
