const mongoose = require("mongoose");

const IncomesSchema = new mongoose.Schema({
  
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default:0,
  },
});

const Incomes = mongoose.model("Incomes", IncomesSchema);

module.exports = Incomes;