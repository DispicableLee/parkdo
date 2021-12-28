
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          created_at:,
          parking_slot_id:,
          start_time:,
          end_time:,
        }
      ]);
    });
};
