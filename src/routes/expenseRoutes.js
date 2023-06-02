/**
 * @openapi
 * /api/expenses:
 *   get:
 *     tags:
 *       - Expenses
 *     summary: Gets all expenses
 *     description: Gets all expenses belonging to a user
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Expense"
 * components:
 *   schemas:
 *     Expense:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 61dbae02
 *         title:
 *           type: string
 *           example: Cat food
 *         amount:
 *           type: number
 *           example: 2
 *         quantity:
 *           type: number
 *           example: 2
 *         description:
 *           type: string
 *           example: Cat was verry happy with this purchase
 *         total:
 *           type: number
 *           example: 4
 *         date:
 *           type: string
 *           example: 2023-05-16T10:00:00.000+00:00
 *         user_id:
 *            type: string
 *            example: qieuu489u2194jkanm
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

const express = require("express");
const expenseController = require("../controllers/expenseController");
const authorization = require("../middleware/authorization");
const router = express.Router();
router.use(authorization);
router.get("/", expenseController.getAllExpenses);

router.get("/:id", expenseController.getExpense);

router.post("/", expenseController.createNewExpense);

router.patch("/:id", expenseController.updateOneExpense);

router.delete("/:id", expenseController.deleteExpense);

module.exports = router;
