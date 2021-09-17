const { Router } = require("express");
const express = require("express");
const expenseGroupRouter = require("./routes/expense-groups-routes.js");
const expenseRouter = require("./routes/expenses-routes.js");
const incomeGroupRouter = require("./routes/income-groups-routes.js");
const incomesRouter = require("./routes/incomes-routes.js");
const mongoose = require("mongoose");
const config = require('./config');
const app = express();



const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
mongoose.connect(connectionString);


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.use("/expense-groups", expenseGroupRouter);
app.use("/expenses", expenseRouter);
app.use("/income-groups", incomeGroupRouter);
app.use("/incomes", incomesRouter);

app.use(Router);


  console.log("Server is running at port 3000");


app.listen(config.app.port);