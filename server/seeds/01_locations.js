exports.seed = function(knex, Promise) {

  return knex.raw('ALTER SEQUENCE locations_id_seq restart with 3;').then(function(){
  return knex('locations').del();

  }).then(function() {
    return Promise.all([

      knex('locations').insert({
        id: 1,
        lat: 47.609194,
        long: -122.325846
        }),

      knex('locations').insert({
        id: 2,
        lat: 47.611917,
        long: -122.325545
      }),
    ]);
  })
};
