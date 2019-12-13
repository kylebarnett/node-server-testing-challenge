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

server.post('/dogs', (req, res) => {
  let dogInfo = req.body;
  if (!dogInfo.dog_name || !dogInfo.dog_breed) {
    res.status(400).json({ message: 'Please include dog name and dog breed.' })
  } else {
    Dogs.insert(dogInfo)
      .then(body => {
        res.json(body)
      })
      .catch(err => {
        res.status(500).json({ message: 'Error on the backend!' })
      })
  }
})

module.exports = server;