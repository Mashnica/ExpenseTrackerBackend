const express = require("express");
const incomesRouter = express.Router();
const incomeModel = require("../models/incomes");
const {  validateAmount,validateGroupID} = require("../helper/validation");

incomesRouter.get("/", async (req, res) => {
  
  try {
    const incomes = await incomeModel.find({});
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//find by income-group
incomesRouter.get("/incomegroup/:incomegroupId", async (req, res) => {
  
  try {
    validateGroupID(req.body.incomegroupId)
    const incomes = await incomeModel.find({
      incomeGroup: req.params.incomegroupId,
    });
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

// /last-five
incomesRouter.get("/last-five", async (req, res) => {
  
  try {
    const incomes = await incomeModel.find({}).sort({ dateUpdated: -1 }).limit(5);
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomesRouter.get("/:id", async (req, res) => {
  
  try {
    const incomes = await incomeModel.findOne({ id: req.params.id });
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomesRouter.post("/", async (req, res) => {
  
  try {
    validateAmount(req.body.amount);
    const result = req.body;
    result.dateCreated = new Date();
    result.dateUpdated = new Date();
    const income = new incomeModel(result);
    await income.save();
    res.send(income);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomesRouter.put("/:id", async (req, res) => {
  
  try {
    var query = { id: req.params.id };
    const newData = req.body;
    newData.dateUpdated = new Date();
    const incomes = await incomeModel.findOneAndUpdate(query, newData);
    await incomes.save();
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomesRouter.delete("/:id", async (req, res) => {
  
  try {
    const incomes = await incomeModel.deleteOne({ id: req.params.id });
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = incomesRouter;
