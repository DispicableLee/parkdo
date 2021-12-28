cr
exports.up = function(knex) {
  return knex.schema.createTable("parking_slot", (table)=>{
      table.increments();
      table.timestamps("created_at");
      table.boolean("verified");
      //table.timestamps("verified_last_update_time");
      table.integer("renter_id");
      table.foreign("carpark_id").references("carpark.id");
      table.string("floor");
      table.string("unit");
  })
};

exports.down = function(knex) {
  
};
