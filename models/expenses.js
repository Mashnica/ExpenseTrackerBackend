const mongoose = require("mongoose");

const ExpensesSchema = new mongoose.Schema({
  
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default:0,
  },
});

const Expenses = mongoose.model("Expenses", ExpensesSchema);

module.exports = Expenses;