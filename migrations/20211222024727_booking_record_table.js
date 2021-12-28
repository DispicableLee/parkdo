
exports.up = function(knex) {
  return knex.schema.createTable("booking_record", (table)=>{
      table.increments();
      table.timestamps("created_at");
      table.integer("tenant_id");
      table.integer("renter_id");
      table.integer("carpark_id");
      table.foreign("carpark_id").references("carpark.id")
      table.timestamps("booking_start_time");
      table.timestamps("booking_end_time");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("booking_record");
};
