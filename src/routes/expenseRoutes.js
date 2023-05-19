const express = require("express");
const expenseController = require("../controllers/expenseController");
const router = express.Router();

router.get("/", expenseController.getAllExpenses);

router.get("/:id", expenseController.getExpense);

router.post("/", expenseController.createNewExpense);

router.patch("/:id", expenseController.updateOneExpense);

router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
