const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const db = require('../data/dbConfig.js');
const Dogs = require('../dogs/dogsModel.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.json({ api: 'up and running' })
})

server.get('/dogs', (req, res) => {
  Dogs.getDogs()
    .then(dog => {
      res.status(200).json(dog)
    })
})

module.exports = server;