const Expense = require("../database/Expense");
const { v4: uuid } = require("uuid");

const getAllExpenses = () => {
  const allExpenses = Expense.getAllExpenses();
  return allExpenses;
};

const getOneExpense = (expenseId) => {
  const expense = Expense.getOneExpense(expenseId);
  return expense;
};

const createNewExpense = (newExpense) => {
  const expenseToInsert = {
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    ...newExpense,
  };
  const createdExpense = Expense.createNewExpense(expenseToInsert);
  return createdExpense;
};

const updateOneExpense = (expenseId, body) => {
  const updatedExpense = Expense.updateOneExpense(expenseId, body);
  return updatedExpense;
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
