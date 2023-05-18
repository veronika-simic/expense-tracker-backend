const mongoose = require("mongoose");
const { Schema, SchemaTypes, model } = mongoose;

const expenseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
  description: String,
  user: {
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

const Expense = model("Expense", expenseSchema);
module.exports = Expense;
