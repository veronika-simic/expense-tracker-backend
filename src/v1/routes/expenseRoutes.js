const express = require("express");
const expenseController = require("../../controllers/expenseController");
const router = express.Router();

router.get("/", expenseController.getAllExpenses);

router.get("/:expenseId", expenseController.getOneExpense);

router.post("/", expenseController.createNewExpense);

router.patch("/:expenseId", expenseController.updateOneExpense);

router.delete("/:expenseId", expenseController.deleteOneExpense);

module.exports = router;
