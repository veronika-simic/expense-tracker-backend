const DB = require("./db.json");
const { saveToDatabase } = require("./utils");
const getAllExpenses = () => {
  return DB.expenses;
};

const getOneExpense = (expenseId) => {
  const expense = DB.expenses.find((expense) => expense.id === expenseId);
  if (!expense) {
    return "Expense does not exist";
  }
  return expense;
};

const updateOneExpense = (expenseId, body) => {
  const indexForUpdate = DB.expenses.findIndex(
    (expense) => expense.id === expenseId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedExpense = {
    ...DB.expenses[indexForUpdate],
    ...body,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.expenses[indexForUpdate] = updatedExpense;
  saveToDatabase(DB);
  return updatedExpense;
};

const deleteOneExpense = (expenseId) => {
  const indexForDeletion = DB.expenses.findIndex(
    (expense) => expense.id === expenseId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.expenses.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

const createNewExpense = (newExpense) => {
  DB.expenses.push(newExpense);
  saveToDatabase(DB);
  return newExpense;
};

module.exports = {
  getAllExpenses,
  getOneExpense,
  updateOneExpense,
  deleteOneExpense,
  createNewExpense,
};
