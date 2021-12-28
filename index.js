<<<<<<< HEAD
// Express required modules
const express = require("express");
const app = express();
app.use(express.static("public"));

//https set up
const https = require('https');
const fs = require('fs');

const options = {
  cert: fs.readFileSync('./localhost.crt'),
  key: fs.readFileSync('./localhost.key')
};


// Passport.js required modules
const session = require("express-session");
const setupPassport = require("./passport");
const passportRouter = require("./Routers/PassportRouter")(express);
const port = process.env.PORT || 3000; 
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
setupPassport(app);
app.use("/", passportRouter);

// Handlebars required modules
const { engine } = require("express-handlebars");
// const { Passport } = require("passport");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});

https.createServer(options, app).listen(port, () => {
  console.log(`application listening to https://localhost:${port}`);
});
=======
// Express required modules
const express = require("express");
const app = express();
app.use(express.static("public"));

// axios set up
const axios = require("axios");

// knex and .env
const env = require("dotenv");
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

// OrderService set up
const OrderService = require("./Services/OrderService");
const orderService = new OrderService(knex, axios);

// ListingService set up
const ListingService = require("./Services/ListingService");
const listingService = new ListingService(knex);

// ViewRouter set up
const ViewRouter = require("./Routers/ViewRouter");
const viewRouter = new ViewRouter(express, orderService, app);

// ApiRouter set up
const ApiRouter = require("./Routers/ApiRouter_v1");
const apiRouter = new ApiRouter(express, orderService);

//https set up
const https = require("https");
const fs = require("fs");

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key"),
};

// Passport.js required modules
const session = require("express-session");
const setupPassport = require("./Services/PassportService");
const passportRouter = require("./Routers/PassportRouter")(express);
const port = process.env.PORT || 3000;
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
setupPassport(app);
app.use("/", passportRouter);

// Handlebars required modules
const { engine } = require("express-handlebars");
// const { Passport } = require("passport");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/", viewRouter.router());
app.use("/api/v1/", apiRouter.router());

https.createServer(options, app).listen(port, () => {
  console.log(`application listening to https://localhost:${port}`);
});
>>>>>>> 6bb8352b4aea45c28a8faaf5bcae75984b460125
