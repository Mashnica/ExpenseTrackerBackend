const express = require("express");
const { now } = require("mongoose");
const expenseRouter = express.Router();
const expenseModel = require("../models/expenses");
const { validateAmount, validateGroupID } = require("../helper/validation");

expenseRouter.get("/", async (req, res) => {
  const pageOptions = {
    page: parseInt(req.query.page - 1, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10,
  };
  try {
    const expenses = await expenseModel
      .find({})
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit);
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.get("/expensegroup/:expensegroupId", async (req, res) => {
  const pageOptions = {
    page: parseInt(req.query.page - 1, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10,
  };
  try {
    //validateGroupID(req.body.expensegroupId);
    const expenses = await expenseModel
      .find({ expenseGroup: req.params.expensegroupId })
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit);
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.get("/last-five", async (req, res) => {
  try {
    const expenses = await expenseModel
      .find({})
      .sort({ dateUpdated: -1 })
      .limit(pageOptions.limit);
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.get("/:id", async (req, res) => {
  try {
    const expenses = await expenseModel.findOne({ id: req.params.id });
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.post("/", async (req, res) => {
  try {
    validateAmount(req.body.amount);
    const result = req.body;
    result.dateCreated = new Date();
    result.dateUpdated = new Date();
    const expenses = new expenseModel(result);
    await expenses.save();
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.put("/:id", async (req, res) => {
  try {
    var query = { id: req.params.id };
    const newData = req.body;
    newData.dateUpdated = new Date();
    const expenses = await expenseModel.findOneAndUpdate(query, newData);
    await expenses.save();
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseRouter.delete("/:id", async (req, res) => {
  try {
    const expenses = await expenseModel.deleteOne({ id: req.params.id });
    res.send(expenses);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = expenseRouter;
