const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Expenses Tracker API",
      description:
        "This is a Expense Tracker App Swagger. For this sample, you can use the `token` , which is returned after successful sign up or login, for authorization.",
      version: "1.0.0",
      contact: { email: "veronikaisles@gmail.com" },
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html",
      },
    },
    externalDocs: {
      description: "Find out more about Swagger",
      url: "http://swagger.io",
    },
    tags: [
      { name: "Expenses", description: "Operations about expenses" },
      { name: "User", description: "Operations about user" },
    ],
  },
  apis: ["./src/routes/expenseRoutes.js", "./src/routes/userRoutes.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/docs`
  );
};

module.exports = { swaggerDocs };
