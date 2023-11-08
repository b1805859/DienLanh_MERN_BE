const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var dbConfig = require("./config/dbConfig");
const routes = require("./routes/index");
dotenv.config();
dbConfig();

const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
