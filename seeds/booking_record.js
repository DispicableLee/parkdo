<<<<<<< HEAD

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
=======
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("booking_record")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("booking_record").insert([
        // Pending booking record
        {
          tenant_id: "2",
          renter_id: "5",
          carpark_id: "6",
          // booking_start_time: "2021-12-23T11:00:00",
          // booking_end_time: "2021-12-23T14:30:00",
        },

        // Cancelled booking record
        {
          tenant_id: "3",
          renter_id: "5",
          carpark_id: "6",
          // booking_start_time: "2021-12-23T11:00:00",
          // booking_end_time: "2021-12-23T14:20:00",
          status: "Cancelled",
        },

        // Confirmed booking record
        // {
        //   tenant_id: "3",
        //   renter_id: "5",
        //   carpark_id: "6",
        //   booking_start_time: "2021-12-23T11:00:00",
        //   booking_end_time: "2021-12-23T14:30:00",
        //   status: "Confirmed",
        // },

        // // Completed booking record
        // {
        //   tenant_id: "2",
        //   renter_id: "4",
        //   carpark_id: "6",
        //   booking_start_time: "2021-12-23T11:00:00",
        //   booking_end_time: "2021-12-23T15:45:00",
        //   actual_start_time: "2021-12-23T11:06:23",
        //   actual_end_time: "2021-12-23T15:36:12",
        //   status: "Completed",
        // },
>>>>>>> 6bb8352b4aea45c28a8faaf5bcae75984b460125
      ]);
    });
};
