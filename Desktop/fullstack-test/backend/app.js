require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const mainRouter = require("./routes/index");

app.use(cors());
const swaggerUi = require("swagger-ui-express");
const api = require("./api.json");
app.use("/api-docs/market", swaggerUi.serve, swaggerUi.setup(api));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", mainRouter);

app.use((req, res, next) => {
  const error = new Error("Tidak ditemukan");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      mesage: error.message,
    },
  });
});

module.exports = app;
