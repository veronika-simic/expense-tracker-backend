const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all expenses");
});

router.get("/:expenseId", (req, res) => {
  res.send("Get an existing expense");
});

router.post("/", (req, res) => {
  res.send("Create new expense");
});

router.patch("/:expenseId", (req, res) => {
  res.send("Update existing expense");
});

router.delete("/:expenseId", (req, res) => {
  res.send("Delete existing expense");
});

module.exports = router;
