const DB = require("./db.json");

const getAllExpenses = () => {
  return DB.expenses;
};

module.exports = { getAllExpenses };
