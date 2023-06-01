const Expense = require("../models/Expense");
const mongoose = require("mongoose");

const getAllExpenses = async (req, res) => {
  const user_id = req.user._id;
  const filters = req.query;
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 8;
  const skip = (page - 1) * limit;

  try {
    let expenses = await Expense.find({ user_id })
      .sort(req.query.sort)
      .skip(skip)
      .limit(limit);
    const filteredExpenses = expenses.filter((expense) => {
      let isValid = true;
      for (key in filters) {
        isValid = isValid && expense[key] == filters[key];
      }
      return isValid;
    });
    res.status(200).json(expenses);
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
    res.status(200).json(expense);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewExpense = async (req, res) => {
  const { body } = req;
  if (!body.title || !body.amount || !body.quantity) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'title', 'amount', 'quantity'",
      },
    });
  }
  const newExpense = {
    title: body.title,
    amount: body.amount,
    quantity: body.quantity,
    date: body.date,
    category: body.category || "Other",
    description: body.description || "No description",
    total: body.amount * body.quantity,
    user_id: req.user._id,
  };
  try {
    const createdExpense = await Expense.create(newExpense);
    res.status(200).json(createdExpense);
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
    res.status(200).json(updateExpense);
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
    res.status(200).json(deleteExpense);
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
