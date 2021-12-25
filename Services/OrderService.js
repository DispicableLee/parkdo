class OrderService {
  constructor(knex, axios) {
    this.knex = knex;
    this.axios = axios;
  }

  // write(data) {
  //   return new Promise((resolve, reject) => {
  //     fs.writeFile(this.file, data, "utf8", (err) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve("Success");
  //     });
  //   });
  // }

  // read() {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(this.file, "utf8", (err, data) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         resolve(data);
  //       }
  //     });
  //   });
  // }

  readAll() {
    let query = this.knex
      .select()
      .from("booking_record")
      .orderBy("booking_record.id", "asc");

    return query.then((rows) => {
      console.log(rows, "listed");
      return rows.map((row) => ({
        id: row.id,
        created_at: row.created_at,
        tenant_id: row.tenant_id,
        renter_id: row.renter_id,
        carpark_id: row.carpark_id,
        // booking_start_time: row.booking_start_time,
        // actual_start_time: row.actual_start_time,
        // actual_end_time: row.actual_end_time,
        status: row.status,
        status_last_update_time: row.updated_at,
      }));
    });
  }

  async writeAll(order, user) {
    let query = await this.knex
      .select("id")
      .from("account")
      .where("account.username", user);

    console.log(query);

    if (query.length === 1) {
      await this.knex
        .insert({
          tenant_id: order.tenant_id,
          renter_id: order.renter_id,
          carpark_id: order.carpark_id,
        })
        .into("booking_record");
    } else {
      throw new Error(`Order failed to place`);
    }
  }
}

module.exports = OrderService;
