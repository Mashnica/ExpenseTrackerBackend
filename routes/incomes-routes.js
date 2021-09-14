const express = require("express");
const incomesRouter = express.Router();
const incomeModel = require("../models/incomes");

incomesRouter.get("/", async (req, res) => {
  const incomes = await incomeModel.find({});
  try {
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//find by income-group
incomesRouter.get("/incomegroup/:incomegroupId", async (req, res) => {
  const incomes = await incomeModel.find({
    incomeGroup: req.params.incomegroupId,
  });
  try {
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

// /last-five
incomesRouter.get("/last-five", async (req, res) => {
  const incomes = await incomeModel.find({}).sort({ dateUpdated: -1 }).limit(5);
  try {
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomesRouter.get("/:id", async (req, res) => {
  const incomes = await incomeModel.findOne({ id: req.params.id });
  try {
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomesRouter.post("/", async (req, res) => {
  const result = req.body;
  result.dateCreated = new Date();
  result.dateUpdated = new Date();
  const income = new incomeModel(result);
  try {
    await income.save();
    res.send(income);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomesRouter.put("/:id", async (req, res) => {
  var query = { id: req.params.id };
  const newData = req.body;
  newData.dateUpdated = new Date();
  const incomes = await incomeModel.findOneAndUpdate(query, newData);
  try {
    await incomes.save();
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomesRouter.delete("/:id", async (req, res) => {
  const incomes = await incomeModel.deleteOne({ id: req.params.id });
  try {
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = incomesRouter;
