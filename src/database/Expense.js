const DB = require("./db.json");
const { saveToDatabase } = require("./utils");
const getAllExpenses = () => {
  return DB.expenses;
};

const getOneExpense = (expenseId) => {
  const expense = DB.expenses.find((expense) => expense.id === expenseId)
  if (!expense) {
    return "Expense does not exist";
  }
  return expense;
};

const createNewExpense = (newExpense) => {
  DB.expenses.push(newExpense);
  saveToDatabase(DB);
  return newExpense;
};

module.exports = { getAllExpenses, getOneExpense, createNewExpense };
