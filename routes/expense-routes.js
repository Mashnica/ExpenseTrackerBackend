const express = require ('express')
const expenseRouter = express.Router()
let expenses =[] //name, amount, expenseGroupId
const { uuid } = require('uuidv4');

    
//get all
expenseRouter.get('/',function(req,res){
    //res.send('Get all Expense groups')
    res.json(expenses);
  });
//get by id
expenseRouter.get('/:id',function (req,res){
    //search by id in array expenses
    const result  = expenses.find(expense=> expense.id === req.params.id)
    res.json(result);
});

//post
expenseRouter.post('/', (req,res) => {
    //res.send('Add Expense ')
    const expense = req.body;
    expense.id = uuid() 
    expenses.push(expense)
    res.json(expense);
    
});
//put 
expenseRouter.put('/:id', (req,res) => {
    expenses = expenses.map(expense  => {
        if(expense.id === req.params.id){
            if(req.body.description){
              expense.description = req.body.description;
              
              
            }
            if(req.body.amount){
                expense.amount= req.body.amount;
                  
            }
          
        expenses.push(expense)
        res.json(expense)
        return expense;
        }
        else {
        return expense;
        }
    });
});

//delete
expenseRouter.delete('/:id', (req,res) =>{
    expenses = expenses.filter(expense => expense.id !== req.params.id);
        res.json(expenses);
});

module.exports= expenseRouter
