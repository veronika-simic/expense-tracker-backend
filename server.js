const express = require("express");
const app = express();
const expenseRoutes = require("./src/routes/expenseRoutes");
const userRoutes = require("./src/routes/userRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./src/documentation/swagger");
const mongoose = require("mongoose");
require("dotenv").config();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  next();
});

app.use("/api/expenses", expenseRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
      V1SwaggerDocs(app, process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
