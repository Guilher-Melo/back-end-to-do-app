require('dotenv').config();

const port = process.env.PORT;

const express = require('express');
const server = express();
const allowCors = require('./cors');

//server.use(bodyParser.urlencoded({ extended: true }));
//server.use(bodyParser.json());
server.use(express.json());
server.use(allowCors);
const main = require('./database');
main();

// Routes
const routes = require('../routes/router');
server.use("/api", routes);

server.listen(port, ()=> {
  console.log(`BACKEND is running on port ${port}`)
});

module.exports = server;