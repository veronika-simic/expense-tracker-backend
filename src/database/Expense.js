const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllExpenses = () => {
  try {
    return DB.expenses;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneExpense = (expenseId) => {
  try {
    const expense = DB.expenses.find((expense) => expense.id === expenseId);
    if (!expense) {
      throw {
        status: 400,
        message: "Can not find expense",
      };
    }
    return expense;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneExpense = (expenseId, body) => {
  try {
    const indexForUpdate = DB.expenses.findIndex(
      (expense) => expense.id === expenseId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find expense with the id '${expenseId}'`,
      };
    }
    const updatedExpense = {
      ...DB.expenses[indexForUpdate],
      ...body,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.expenses[indexForUpdate] = updatedExpense;
    saveToDatabase(DB);
    return updatedExpense;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneExpense = (expenseId) => {
  try {
    const indexForDeletion = DB.expenses.findIndex(
      (expense) => expense.id === expenseId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find expense with the id '${expenseId}'`,
      };
    }
    DB.expenses.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewExpense = (newExpense) => {
  try {
    DB.expenses.push(newExpense);
    saveToDatabase(DB);
    return newExpense;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllExpenses,
  getOneExpense,
  updateOneExpense,
  deleteOneExpense,
  createNewExpense,
};
