const getAllExpenses = (req, res) => {
  res.send("Get all expenses");
};

const getOneExpense = (req, res) => {
  res.send("Get an existing expense");
};

const createNewExpense = (req, res) => {
  res.send("Create new expense");
};

const updateOneExpense = (req, res) => {
  res.send("Update existing expense");
};

const deleteOneExpense = (req, res) => {
  res.send("Delete existing expense");
};

module.exports = {
  getAllExpenses,
  getOneExpense,
  createNewExpense,
  updateOneExpense,
  deleteOneExpense,
};
