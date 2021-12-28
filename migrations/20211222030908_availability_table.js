
exports.up = function(knex) {
  return knex.schema.createTable("availability", (table)=>{
      table.increments();
      table.timestamps("created_at");
      table.foreign("parking_slot_id").references("parking_slot_table.id");
      table.timestamps("start_time");
      table.timestamps("end_time");
      table.boolean("active");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("availability");
};
