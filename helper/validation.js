
const expensegroupModel = require("../models/expense-group");
const expenseModel = require("../models/expenses");
const incomeModel = require("../models/incomes");
const incomegroupModel = require("../models/income-groups");

//validation id
function validateID() {
    let x = expensegroupModel.findOne({ id: req.params.id });
    if (x == " ") {
      alert("ID must be string");
      return false;
    }
  }


//validation name
function validateName() {
    let name = new expensegroupModel(req.body);
    if(name = " "){
        alert("Name must be filled out")
        return false;
    }

}
//validation amount
function validateAmount() {
    let amount = new expenseModel(req.body);
    if(amount == " " ){
        //alert("Amount must be number")
        //return false;
        throw "Amount must be number"
    }

}

//validation expense group
function validateExpenseGroupID(){
    let expenseGroup= new expenseModel(req.body);
    if(expenseGroup == " "){
        throw "Expense group must be string!"
    }
}

//validation income group
function validateIncomeGroupID(){
    let incomeGroup = new incomeModel(req.body);
    if(incomeGroup == " "){
        throw "Income group must be filled out!"
    }
}

//validation amount incomes
function validateAmount(){
    let income = new incomeModel(req.body);
    if(income == " "){
        throw "Amount must be number"
    }

}
//validation id income group
function validateId(){
    let x = incomegroupModel.findOne({ id: req.params.id });
    if(x == " "){
        alert(" ID must be string !");
        return false;

    }
}
