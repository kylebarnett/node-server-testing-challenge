const db = require('../data/dbConfig.js');

module.exports = {
  getDogs,
  insert,
  remove
}

function getDogs() {
  return db('dogs')
}

function insert(dog) {
  return db('dogs').insert(dog)
}

function remove(id) {
  return db('dogs').where({ id }).del()
}