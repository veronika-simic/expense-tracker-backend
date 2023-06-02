/**
 * @openapi
 * /api/expenses:
 *   get:
 *     tags:
 *       - Expenses
 *     summary: Gets all expenses
 *     description: Gets all expenses belonging to a user
 *     operationId: getAllExpenses
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 $ref: "#/components/schemas/Expense"
 *       401:
 *         description: Missing authentication token      
 *       500: 
 *         description: Internal server error
 *     security: 
 *         - user_auth:
 *             - write:users
 *             - read:users
 *   post:
 *     tags:
 *       - Expenses
 *     summary: Add new expense
 *     description: Add new expense
 *     operationId: addExpense
 *     requestBody: 
 *       description: Create a new expense
 *       content:
 *        application/json:
 *          schema:
 *              $ref: "#/components/schemas/Expense"
 *        application/xml:
 *          schema:
 *              $ref: "#/components/schemas/Expense"
 *        application/x-www-form-urlencoded:
 *          schema:
 *              $ref: "#/components/schemas/Expense"
 *       required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: "#/components/schemas/Expense"
 *           application/xml:
 *             schema:
 *              $ref: "#/components/schemas/Expense"
 *       405:
 *         description: Invalid input     
 *       500: 
 *         description: Internal server error
 *     security: 
 *         - user_auth:
 *             - write:users
 *             - read:users
 * /api/expenses/{expenseId}:
 *   get:
 *     tags:
 *       - Expenses
 *     summary: Find expense by ID
 *     description: Returns a single expense
 *     operationId: getExpenseById
 *     parameters: 
 *       -  in: path
 *          name: expenseId
 *          description: ID of expense to return
 *          required: true
 *          schema: 
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: "#/components/schemas/Expense"
 *       400: 
 *         description: Invalid ID 
 *       401:
 *         description: Missing authentication token
 *       404: 
 *         description: Expense not found          
 *       500: 
 *         description: Internal server error
 *     security: 
 *         - user_auth:
 *             - write:users
 *             - read:users
 *   patch:
 *     tags:
 *       - Expenses
 *     summary: Update existing expense
 *     description: Update existing expense by ID
 *     operationId: updateExpense
 *     parameters: 
 *       -  in: path
 *          name: expenseId
 *          description: ID of expense to update
 *          required: true
 *          schema: 
 *           type: string
 *     requestBody:
 *       description: Update existing expense
 *       content:
 *         application/json:
 *           schema:
 *              $ref: "#/components/schemas/Expense"
 *         application/xml:
 *           schema:
 *              $ref: "#/components/schemas/Expense"
 *         application/x-www-form-urlencoded:
 *          schema:
 *              $ref: "#/components/schemas/Expense"
 *       required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: "#/components/schemas/Expense"
 *       400: 
 *         description: Invalid ID 
 *       401:
 *         description: Missing authentication token
 *       404: 
 *         description: Expense not found          
 *       500: 
 *         description: Internal server error
 *     security: 
 *         - user_auth:
 *             - write:users
 *             - read:users  
 *   delete:
 *     tags:
 *       - Expenses
 *     summary: Delete existing expense
 *     description: Delete existing expense by ID
 *     operationId: deleteExpense
 *     parameters: 
 *       -  in: path
 *          name: expenseId
 *          description: ID of expense to delete
 *          required: true
 *          schema: 
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       400: 
 *         description: Invalid ID 
 *       401:
 *         description: Missing authentication token
 *       404: 
 *         description: Expense not found          
 *       500: 
 *         description: Internal server error
 *     security: 
 *         - user_auth:
 *             - write:users
 *             - read:users  
 * components:
 *   schemas:
 *     Expense:
 *       type: object
 *       properties:
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
