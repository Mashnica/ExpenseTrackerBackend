const express = require("express");
const { validateName } = require("../helper/validation");
const expenseGroupRouter = express.Router();
const expensegroupModel = require("../models/expense-group");

expenseGroupRouter.get("/", async (req, res) => {
  const pageOptions = {
    page: parseInt(req.query.page - 1, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10,
  };
  try {
    const expensegroups = await expensegroupModel
      .find({})
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit);
    res.send(expensegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.get("/:id", async (req, res) => {
  try {
    const expensegroups = await expensegroupModel.findOne({
      id: req.params.id,
    });
    res.send(expensegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.post("/", async (req, res) => {
  try {
    validateName(req.body.name);
    const expensegroup = new expensegroupModel(req.body);
    await expensegroup.save();
    res.send(expensegroup);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.put("/:id", async (req, res) => {
  try {
    var query = { id: req.params.id };
    newData = req.body;
    const expensegroup = await expensegroupModel.findOneAndUpdate(
      query,
      req.body
    );
    await expensegroup.save();
    res.send(expensegroup);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.delete("/:id", async (req, res) => {
  try {
    const expensegroups = await expensegroupModel.deleteOne({
      id: req.params.id,
    });
    res.send(expensegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = expenseGroupRouter;
