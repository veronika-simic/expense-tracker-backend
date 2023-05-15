const expenseService = require("../services/expenseService");

const getAllExpenses = (req, res) => {
  const allExpenses = expenseService.getAllExpenses();
  res.send({ status: "OK", data: allExpenses });
};

const getOneExpense = (req, res) => {
  const {
    params: { expenseId },
  } = req;
  const expense = expenseService.getOneExpense(expenseId);
  res.send({ status: "OK", data: expense });
};

const createNewExpense = (req, res) => {
  const { body } = req;
  if (!body.title || !body.amount || !body.description) {
    return;
  }
  const newExpense = {
    title: body.title,
    amount: body.amount,
    description: body.description,
  };
  const createdExpense = expenseService.createNewExpense(newExpense);
  res.status(201).send({ status: "OK", data: createdExpense });
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
