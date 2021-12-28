
exports.up = function(knex) {
  return knex.schema.createTable("payment_transaction", (table)=>{
      table.increments();
      table.timestamps("created_at");
      table.foreign("booking_record_id").references("booking_record_table.id");
      table.foreign("tenant_id").references("account.id");
      table.foreign("renter_id").references("account.id");
      table.foreign("carpark_id").references("carpark.id");
      table.integer("received_from_tenant");//should be boolean?
      table.integer("paid_to_carpark");
      table.integer("paid_to_renter");
      table.integer("profit");
  })
};

exports.down = function(knex) {
  return knex.shema.dropTable("payment_transaction");
};
