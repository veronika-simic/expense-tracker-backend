const Expense = require("../database/Expense");

const getAllExpenses = () => {
  const allExpenses = Expense.getAllExpenses();
  return allExpenses;
};

const getOneExpense = () => {
  return;
};

const createNewExpense = () => {
  return;
};

const updateOneExpense = () => {
  return;
};

const deleteOneExpense = () => {
  return;
};

module.exports = {
  getAllExpenses,
  getOneExpense,
  createNewExpense,
  updateOneExpense,
  deleteOneExpense,
};
