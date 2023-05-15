const Expense = require("../database/Expense");
const { v4: uuid } = require("uuid");

const getAllExpenses = () => {
  try {
    const allExpenses = Expense.getAllExpenses();
    return allExpenses;
  } catch (error) {
    return error;
  }
};

const getOneExpense = (expenseId) => {
  try {
    const expense = Expense.getOneExpense(expenseId);
    return expense;
  } catch (error) {
    return error;
  }
};

const createNewExpense = (newExpense) => {
  const expenseToInsert = {
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    ...newExpense,
  };
  try {
    const createdExpense = Expense.createNewExpense(expenseToInsert);
    return createdExpense;
  } catch (error) {
    return error;
  }
};

const updateOneExpense = (expenseId, body) => {
  try {
    const updatedExpense = Expense.updateOneExpense(expenseId, body);
    return updatedExpense;
  } catch (error) {
    return error;
  }
};

const deleteOneExpense = (expenseId) => {
  try {
    const deletedExpense = Expense.deleteOneExpense(expenseId);
    return deletedExpense;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllExpenses,
  getOneExpense,
  createNewExpense,
  updateOneExpense,
  deleteOneExpense,
};
