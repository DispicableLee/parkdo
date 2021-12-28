
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          created_at:,
          booking_record_id:,
          tenant_id:,
          renter_id:,
          carpark_id:,
          recieved_from_tenant:,
          paid_to_carpark:,
          paid_to_renter:,
          profit:,
        }
      ]);
    });
};
