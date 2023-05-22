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
    description: { type: String, required: false },
    user_id: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Expense = model("Expense", expenseSchema);
module.exports = Expense;
