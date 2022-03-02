"use strict";
const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger.js");
const errorhandler = require("./error-handler/500.js");
const notFound = require("./error-handler/404.js");
const clothesRouter = require("./routes/clothes.js");
const foodRouter = require("./routes/food");

const app = express();
app.use(express.json());
app.use(cors());

app.use(logger);
app.use("/api/v1", clothesRouter);
app.use("/api/v1", foodRouter);

app.get("/", (req, res) => {
  res.send("home");
});

app.use(errorhandler);
app.use("*", notFound);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`you in port ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
