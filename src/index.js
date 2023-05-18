const express = require("express");
const bodyParser = require("body-parser");
const v1ExpenseRouter = require("./v1/routes/expenseRoutes");
const app = express();
const middleware = require("./middleware/authorization");
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.send("It works");
});
app.use(bodyParser.json());
app.use("/api/v1/expenses", v1ExpenseRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

/*veronikasimic21 oMM0926WfBcETR7J */

mongoose.connect('mongodb+srv://veronikasimic21:oMM0926WfBcETR7J@expenses.jrclev0.mongodb.net/')
