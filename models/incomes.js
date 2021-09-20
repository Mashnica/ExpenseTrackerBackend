const mongoose = require("mongoose");
//require

const IncomesSchema = new mongoose.Schema({
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
  incomeGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "IncomeGroups",
    required: true,
  },
});

const Incomes = mongoose.model("Incomes", IncomesSchema);

module.exports = Incomes;
