
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          created_a:,
          verified: true,
          renter_id:1,
          carpark_id:1,
          floor:,
          unit:,
        }
      ]);
    });
};
