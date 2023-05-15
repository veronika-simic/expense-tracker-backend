const express = require("express");
const v1Router = require("./v1/routes");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("It works");
});

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
