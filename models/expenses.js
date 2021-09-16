const mongoose = require("mongoose");

const ExpensesSchema = new mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    default: 0,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  dateUpdated: {
    type: Date,
    required: true,
  },
  expenseGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExpenseGroups",
    required: true,
  },
});

const Expenses = mongoose.model("Expenses", ExpensesSchema);

module.exports = Expenses;
