
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('availability').del()
    .then(function () {
      // Inserts seed entries
      return knex('availability').insert([
        {parking_slot_id: 1, start_time: "2022-01-01T00:00:00", end_time: "2022-01-01T14:00:00", active: "true"},
        {parking_slot_id: 1, start_time: "2022-01-03T00:00:00", end_time: "2022-01-03T14:00:00", active: "true"},
        {parking_slot_id: 1, start_time: "2022-01-05T00:00:00", end_time: "2022-01-05T14:00:00", active: "true"},
        {parking_slot_id: 1, start_time: "2022-01-07T00:00:00", end_time: "2022-01-07T14:00:00", active: "true"},
        {parking_slot_id: 1, start_time: "2022-01-02T14:00:00", end_time: "2022-01-02T21:00:00", active: "true"},
        {parking_slot_id: 1, start_time: "2022-01-04T14:00:00", end_time: "2022-01-04T21:00:00", active: "true"},
        {parking_slot_id: 1, start_time: "2022-01-06T14:00:00", end_time: "2022-01-06T21:00:00", active: "true"},
        {parking_slot_id: 1, start_time: "2022-01-08T14:00:00", end_time: "2022-01-07T21:00:00", active: "true"},
        {parking_slot_id: 2, start_time: "2022-01-01T10:00:00", end_time: "2022-01-01T21:00:00", active: "true"},



      ]);
    });
};