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
    total: { type: Number, required: false },
    date: {
      type: Date,
      required: false,
      default: Date.now,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Expense = model("Expense", expenseSchema);
module.exports = Expense;
