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
  const {
    body,
    params: { expenseId },
  } = req;
  console.log(expenseId);
  if (!expenseId) {
    return;
  }
  const updateExpense = expenseService.updateOneExpense(expenseId, body);
  res.send({ status: "OK", data: updateExpense });
};

const deleteOneExpense = (req, res) => {
  const {
    params: { expenseId },
  } = req;
  const deleteExpense = expenseService.deleteOneExpense(expenseId);
  res.send({status: "OK", deleteExpense});
};

module.exports = {
  getAllExpenses,
  getOneExpense,
  createNewExpense,
  updateOneExpense,
  deleteOneExpense,
};
