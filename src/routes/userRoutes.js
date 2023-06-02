/**
 * @openapi
 * /api/user/login:
 *   post:
 *     tags:
 *       - User
 *     summary: Logs in the existing user
 *     description: Logs in the existing user with email and password
 *     operationId: loginUser
 *     requestBody:
 *      description: Log in an existing user
 *      content:
 *        application/json:
 *          schema:
 *              $ref: "#/components/schemas/User"
 *        application/xml:
 *          schema:
 *              $ref: "#/components/schemas/User"
 *        application/x-www-form-urlencoded:
 *          schema:
 *              $ref: "#/components/schemas/User"
 *      required: 
 *          true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: "#/components/schemas/User"
 *           application/xml:
 *              schema: 
 *                 $ref: "#/components/schemas/User"
 *       400:
 *         description: Invalid credentials
 *       401: 
 *         description:  User does not exist
 *       405: 
 *         description: Validation exception
 *     security: 
 *          - user_auth:
 *              - write:users
 *              - read:users
 * 
 * /api/user/signup:
 *   post:
 *     tags:
 *       - User
 *     summary: Sign up user
 *     description: Creates a new user with verified email and password
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
 *                     $ref: "#/components/schemas/User"
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 61dbae02
 *         email:
 *           type: string
 *           example: jane@doe.com
 *         password:
 *           type: string
 *           example: abcABC123!
 */

const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");
const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

module.exports = router;
