exports.seed = function(knex, Promise) {

  return knex.raw('ALTER SEQUENCE users_id_seq restart with 3;').then(function() {
  return knex('users').del();

  }).then(function() {
    return Promise.all([

      knex('users').insert({
        id: 1,
        name: 'Chip Douglas'
      }),

      knex('users').insert({
        id: 2,
        name: 'Kirk McDoogle'
      }),
    ]);
  })
};
