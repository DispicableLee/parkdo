
exports.up = function(knex) {
  return knex.schema.creaeTable("comments", (table)=>{
      table.increments();
      table.integer('booking_id');
      table.foreign("booking_id").references("booking_record.id");
      table.integer("account_id");
      table.foreign("account_id").references("account.id");
      table.string("comment_content");
      table.integer("rating");
  })
};

exports.down = function(knex) {
  
};
