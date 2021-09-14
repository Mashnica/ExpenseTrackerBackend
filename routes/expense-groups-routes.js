const express = require("express");
const expenseGroupRouter = express.Router();
let expenseGroups = [];
const expensegroupModel = require("../models/expense-group");

expenseGroupRouter.get("/", async (req, res) => {
  const expensegroups = await expensegroupModel.find({});
  try {
    res.send(expensegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.get("/:id", async (req, res) => {
  const expensegroups = await expensegroupModel.findOne({ id: req.params.id });
  try {
    res.send(expensegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.post("/", async (req, res) => {
  const expensegroup = new expensegroupModel(req.body);
  try {
    await expensegroup.save();
    res.send(expensegroup);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.put("/:id", async (req, res) => {
  var query = { id: req.params.id };
  newData = req.body;
  const expensegroup = await expensegroupModel.findOneAndUpdate(
    query,
    req.body
  );
  try {
    await expensegroup.save();
    res.send(expensegroup);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.delete("/:id", async (req, res) => {
  const expensegroups = await expensegroupModel.deleteOne({
    id: req.params.id,
  });
  try {
    res.send(expensegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = expenseGroupRouter;
