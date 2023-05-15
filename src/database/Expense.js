const DB = require("./db.json");
const { saveToDatabase } = require("./utils");
const getAllExpenses = () => {
  return DB.expenses;
};

const createNewExpense = (newExpense) => {
  DB.expenses.push(newExpense);
  saveToDatabase(DB);
  return newExpense;
};

module.exports = { getAllExpenses, createNewExpense };
