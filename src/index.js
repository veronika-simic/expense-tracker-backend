const express = require("express");
const bodyParser = require("body-parser");
const v1ExpenseRouter = require("./v1/routes/expenseRoutes");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("It works");
});
app.use(bodyParser.json());
app.use("/api/v1/expenses", v1ExpenseRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
