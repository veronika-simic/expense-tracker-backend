const express = require("express");
const bodyParser = require("body-parser");
const v1ExpenseRouter = require("./v1/routes/expenseRoutes");
const app = express();
const middleware = require("./middleware/authorization");
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const Expense = require("./model/Expense");
const User = require("./model/User");
app.get("/", (req, res) => {
  res.send("It works");
});
app.use(bodyParser.json());
app.use("/api/v1/expenses", v1ExpenseRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

/*veronikasimic21 oMM0926WfBcETR7J */

mongoose.connect(
  "mongodb+srv://veronikasimic21:oMM0926WfBcETR7J@expenses.jrclev0.mongodb.net/"
);

const user = User.create({
  email: "jesse@email.com",
  password: "123495903!",
});

console.log(user);

const exp = Expense.create({
  title: "Fish food",
  amount: 2,
  description: "yummy",
  user: user._id,
});

console.log(exp);
