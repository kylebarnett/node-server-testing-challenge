
exports.up = function (knex) {
  return knex.schema.createTable('dogs', tbl => {
    tbl.increments();
    tbl.string('dog_name', 128).notNullable();
    tbl.string('dog_breed', 128).notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('dogs');
};
