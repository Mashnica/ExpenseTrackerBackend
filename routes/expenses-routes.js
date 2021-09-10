const express = require ('express')
const expenseRouter = express.Router()
let expenses =[] 
const { uuid } = require('uuidv4');

    

expenseRouter.get('/',function(req,res){
    
    res.json(expenses);
  });

expenseRouter.get('/:id',function (req,res){
    
    const result  = expenses.find(expense=> expense.id === req.params.id)
    res.json(result);
});


expenseRouter.post('/', (req,res) => {
   
    const expense = req.body;
    expense.id = uuid() 
    expenses.push(expense)
    res.json(expense);
    
});
 
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


expenseRouter.delete('/:id', (req,res) =>{
    expenses = expenses.filter(expense => expense.id !== req.params.id);
        res.json(expenses);
});

module.exports= expenseRouter
