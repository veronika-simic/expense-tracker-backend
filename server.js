const express = require("express");
const app = express();
const expenseRoutes = require("./src/routes/expenseRoutes");
const mongoose = require("mongoose");
require("dotenv").config();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  next();
});

app.use("/api/expenses", expenseRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
