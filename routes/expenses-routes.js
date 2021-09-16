const express = require("express");
const { now } = require("mongoose");
const expenseRouter = express.Router();
const expenseModel = require("../models/expenses");

expenseRouter.get("/", async (req, res) => {
  const expenses = await expenseModel.find({});
  try {
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});
//find by expense-group
expenseRouter.get("/expensegroup/:expensegroupId", async (req, res) => {
  const expenses = await expenseModel.find({
    expenseGroup: req.params.expensegroupId,
  });
  try {
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// /last-five
expenseRouter.get("/last-five", async (req, res) => {
  const expenses = await expenseModel
    .find({})
    .sort({ dateUpdated: -1 })
    .limit(5);
  try {
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.get("/:id", async (req, res) => {
  const expenses = await expenseModel.findOne({ id: req.params.id });
  try {
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.post("/", async (req, res) => {
  const result = req.body;
  result.dateCreated = new Date(); //dateupdated
  result.dateUpdated = new Date();
  const expenses = new expenseModel(result);
  try {
    await expenses.save();
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.put("/:id", async (req, res) => {
  var query = { id: req.params.id };
  const newData = req.body;
  newData.dateUpdated = new Date();
  const expenses = await expenseModel.findOneAndUpdate(query, newData);
  try {
    await expenses.save();
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.delete("/:id", async (req, res) => {
  const expenses = await expenseModel.deleteOne({ id: req.params.id });
  try {
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = expenseRouter;
