const { Router } = require("express");
const express = require("express");
const app = express();
const expenseGroupRouter = require("./routes/expense-groups-routes.js");
const expenseRouter = require("./routes/expenses-routes.js");
const incomeGroupRouter = require("./routes/income-groups-routes.js");
const incomesRouter = require("./routes/incomes-routes.js");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/expensetrackerdb", {});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.use("/expense-groups", expenseGroupRouter);
app.use("/expenses", expenseRouter);
app.use("/income-groups", incomeGroupRouter);
app.use("/incomes", incomesRouter);

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
