const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
// const passport = require("passport");
// const FacebookStrategy = require("passport-facebook").Strategy;
// const session = require("express-session");
const cookieParser = require("cookie-parser");
const stripe = require("stripe");
const port = process.env.PORT || 3000;
const routs = require("./routers");
const db = require("./config/db");
const { log } = require("console");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env" });

db.connect();
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//http
app.use(morgan("combined"));
//engine
// app.use(passport.initialize());

app.use(cookieParser());
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );
//set up

app.enable("trust proxy");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "resources/view"));

// app.set('trust proxy', 1) // trust first proxy

routs(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
