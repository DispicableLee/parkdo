
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          created_at:,
          tenant_id:1,
          renter_id:1,
          carpark_id:1,
          booking_start_time:,
          booking_end_time:,
        } 
      ]);
    });
};
