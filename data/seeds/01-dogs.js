
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        { dog_name: 'Beaux', dog_breed: 'Portuguese Water Dog' },
        { dog_name: 'Flynn', dog_breed: 'Miniature Australian Shepherd' },
        { dog_name: 'Newton', dog_breed: 'Miniature Australian Shepherd' }
      ]);
    });
};
