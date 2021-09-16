//const validate = require("../helper/validation");
const express = require("express");
const {  validateName } = require("../helper/validation");
const expenseGroupRouter = express.Router();
const expensegroupModel = require("../models/expense-group");

expenseGroupRouter.get("/", async (req, res) => {
  
  try {
    const expensegroups = await expensegroupModel.find({});
    res.send(expensegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

expenseGroupRouter.get("/:id", async (req, res) => {
  try {
    
    const expensegroups = await expensegroupModel.findOne({ id: req.params.id });
    res.send(expensegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});
//??
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
