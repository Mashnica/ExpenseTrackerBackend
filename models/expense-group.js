const mongoose = require("mongoose");

const ExpenseGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const ExpenseGroups = mongoose.model("ExpenseGroups", ExpenseGroupSchema);

module.exports = ExpenseGroups;
