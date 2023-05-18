const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const expenseSchema = new Schema({
  title: String,
  amount: Number,
  createdAt: Date,
  updatedAt: Date,
  description: String,
});

const Expense = model("Expense", expenseSchema);
export default Expense;
