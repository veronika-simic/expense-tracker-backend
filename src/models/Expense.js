const mongoose = require("mongoose");
const { Schema, SchemaTypes, model } = mongoose;

const expenseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

const Expense = model("Expense", expenseSchema);
module.exports = Expense;
