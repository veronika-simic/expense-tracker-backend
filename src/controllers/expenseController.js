const Expense = require("../models/Expense");
const mongoose = require("mongoose");

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({}).sort({ createdAt: -1 });
    res.send({ status: "OK", data: expenses });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getExpense = async (req, res) => {
  const {
    params: { id },
  } = req;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "No such expense" },
    });
  }
  try {
    const expense = await Expense.findById(id);
    res.send({ status: "OK", data: expense });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewExpense = async (req, res) => {
  const { body } = req;
  if (!body.title || !body.amount || !body.description) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'title', 'amount', 'description'",
      },
    });
  }
  const newExpense = {
    title: body.title,
    amount: body.amount,
    description: body.description,
  };
  try {
    const createdExpense = await Expense.create(newExpense);
    res.status(201).send({ status: "OK", data: createdExpense });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneExpense = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
  try {
    const updateExpense = await Expense.findOneAndUpdate(
      { _id: id },
      { ...body }
    );
    res.send({ status: "OK", data: updateExpense });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteExpense = async (req, res) => {
  const {
    params: { id },
  } = req;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }

  try {
    const deleteExpense = await Expense.findOneAndDelete({ _id: id });
    res.send({ status: "OK", deleteExpense });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllExpenses,
  getExpense,
  createNewExpense,
  updateOneExpense,
  deleteExpense,
};
