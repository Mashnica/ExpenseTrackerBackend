const express = require("express");
const incomesRouter = express.Router();
const incomeModel = require("../models/incomes");
const { validateAmount, validateGroupID } = require("../helper/validation");

incomesRouter.get("/", async (req, res) => {
  const pageOptions = {
    page: parseInt(req.query.page - 1, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10,
  };
  try {
    const incomes = await incomeModel
      .find({})
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit);

    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});


incomesRouter.get("/incomegroup/:incomegroupId", async (req, res) => {
  const pageOptions = {
    page: parseInt(req.query.page - 1, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10,
  };
  try {
    //validateGroupID(req.body.incomegroupId);
    const incomes = await incomeModel
      .find({ incomeGroup: req.params.incomegroupId })
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit);
    res.send(incomes);
  } catch (error) {
    res.status(500).send(error);
  }
});


incomesRouter.get("/last-five", async (req, res) => {
  try {
    const incomes = await incomeModel
      .find({})
      .sort({ dateUpdated: -1 })
      .limit(5);
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
