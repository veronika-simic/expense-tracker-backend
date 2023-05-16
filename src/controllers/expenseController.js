const expenseService = require("../services/expenseService");

const getAllExpenses = (req, res) => {
  try {
    const allExpenses = expenseService.getAllExpenses();
    res.send({ status: "OK", data: allExpenses });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneExpense = (req, res) => {
  const {
    params: { expenseId },
  } = req;
  if (!expenseId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':expenseId' can not be empty" },
    });
  }
  try {
    const expense = expenseService.getOneExpense(expenseId);
    res.send({ status: "OK", data: expense });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
  const expense = expenseService.getOneExpense(expenseId);
  res.send({ status: "OK", data: expense });
};

const createNewExpense = (req, res) => {
  const { body } = req;
  if (!body.title || !body.amount || !body.description) {
  }
  res.status(400).send({
    status: "FAILED",
    data: {
      error:
        "One of the following keys is missing or is empty in request body: 'title', 'amount', 'description'",
    },
  });
  const newExpense = {
    title: body.title,
    amount: body.amount,
    description: body.description,
  };
  try {
    const createdExpense = expenseService.createNewExpense(newExpense);
    res.status(201).send({ status: "OK", data: createdExpense });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneExpense = (req, res) => {
  const {
    body,
    params: { expenseId },
  } = req;
  console.log(expenseId);
  if (!expenseId) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
  try {
    const updateExpense = expenseService.updateOneExpense(expenseId, body);
    res.send({ status: "OK", data: updateExpense });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneExpense = (req, res) => {
  const {
    params: { expenseId },
  } = req;
  if (!expenseId) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
  try {
    const deleteExpense = expenseService.deleteOneExpense(expenseId);
    res.send({ status: "OK", deleteExpense });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllExpenses,
  getOneExpense,
  createNewExpense,
  updateOneExpense,
  deleteOneExpense,
};
