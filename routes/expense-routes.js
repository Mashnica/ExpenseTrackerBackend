const express = require ('express')
const expenseRouter = express.Router()
const expenses =[] //name, amount, expense-group
//get all
expenseRouter.get('/',function(req,res){
    //res.send('Get all Expense groups')
    res.json(expenses);
  });
//get by id
//...
//post
expenseRouter.post('/', (req,res) => {
    //res.send('Add Expense ')
    const expenses = req.body;
    expenses.id = uuid() 
    expenses.push(expensegroup)
    res.json(expenses);
    
});
//put 
expenseRouter.put('/expenses', (req,res) => {
    res.send('Edit expense  ')
});

//delete
expenseRouter.delete('/expenses', (req,res) =>{
    res.delete('Delete expense ')
});

module.exports= expenseRouter
