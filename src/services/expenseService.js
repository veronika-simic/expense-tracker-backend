const Expense = require("../database/Expense");
const { v4: uuid } = require("uuid");

const getAllExpenses = () => {
  const allExpenses = Expense.getAllExpenses();
  return allExpenses;
};

const getOneExpense = () => {
  return;
};

const createNewExpense = (newExpense) => {
    console.log(newExpense)
  const expenseToInsert = {
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    ...newExpense,
  };
  const createdExpense = Expense.createNewExpense(expenseToInsert);
  return createdExpense;
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
