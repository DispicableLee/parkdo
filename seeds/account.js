const bcrypt = require("../bcrypt");


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("account")
    .del()
    .then(async function () {
      const hashedPassword = await bcrypt.hashPassword("password");
      // Inserts seed entries
      return knex("account").insert([
        {
          is_renter: true,
          username: "moryah",
          password: hashedPassword,
          email: "moryah@gmail.com",
          first_name: "Moryah",
          last_name: "Ng",
          phone: 98789583,
        },
        {
          is_renter: false,
          username: "jason",
          password: hashedPassword,
          email: "jason@gmail.com",
          first_name: "Jason",
          last_name: "Tang",
          phone: 63703506,
        },
        {
          is_renter: true,
          username: "robert",
          password: hashedPassword,
          email: "rob@gmail.com",
          first_name: "Robert",
          last_name: "Lee",
          phone: 12345678,
        },
      ]);
    });
};
