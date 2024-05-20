require("./config/db");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const origin = process.env.CURRENT_CLIENT_DOMAIN;

const app = express();
app.use(cors({ credentials: true, origin: origin }));
app.use(express.json());
app.use(routes);

module.exports = app;
