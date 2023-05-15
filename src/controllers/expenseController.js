const expenseService = require("../services/expenseService");

const getAllExpenses = (req, res) => {
  const allExpenses = expenseService.getAllExpenses();
  res.send("Get all expenses");
};

const getOneExpense = (req, res) => {
  const expense = expenseService.getOneExpense();
  res.send("Get an existing expense");
};

const createNewExpense = (req, res) => {
  const createExpense = expenseService.createNewExpense();
  res.send("Create new expense");
};

const updateOneExpense = (req, res) => {
  const updateExpense = expenseService.updateOneExpense();
  res.send("Update existing expense");
};

const deleteOneExpense = (req, res) => {
  const deleteExpense = expenseService.deleteOneExpense();
  res.send("Delete existing expense");
};

module.exports = {
  getAllExpenses,
  getOneExpense,
  createNewExpense,
  updateOneExpense,
  deleteOneExpense,
};
