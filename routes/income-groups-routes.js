const express = require("express");
const incomeGroupRouter = express.Router();
const incomegroupModel = require("../models/income-groups");
const { validateName } = require("../helper/validation");

incomeGroupRouter.get("/", async (req, res) => {
  
  try {
    const incomegroups = await incomegroupModel.find({});
    res.send(incomegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomeGroupRouter.get("/:id", async (req, res) => {
  
  try {
    const incomegroups = await incomegroupModel.findOne({ id: req.params.id });
    res.send(incomegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomeGroupRouter.post("/", async (req, res) => {
  
  try {
    validateName(req.body.name);
    const incomegroups = new incomegroupModel(req.body);
    await incomegroups.save();
    res.send(incomegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomeGroupRouter.put("/:id", async (req, res) => {
  
  try {
    var query = { id: req.params.id };
    newData = req.body;
    const incomegroups = await incomegroupModel.findOneAndUpdate(query, req.body);
    await incomegroups.save();
    res.send(incomegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

incomeGroupRouter.delete("/:id", async (req, res) => {
  
  try {
    const incomegroups = await incomegroupModel.deleteOne({ id: req.params.id });
    res.send(incomegroups);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = incomeGroupRouter;
