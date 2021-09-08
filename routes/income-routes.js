const express = require ('express')
const incomesRouter = express.Router()
const incomes =[] //name, amount, income-group

//get all
incomesRouter.get('/',function(req,res){
    //res.send('Get all incomes')
    res.json(incomes);
  });


//get by id
//...

//post
incomesRouter.post('/', (req,res) => {
    //res.send('Add income ')
    const incomes = req.body;
    incomes.id = uuid() 
    incomes.push(expensegroup)
    res.json(incomes);
    
});

//put 
incomesRouter.put('/incomes', (req,res) => {
    res.send('Edit incomes  ')
});

//delete
incomesRouter.delete('/incomes', (req,res) =>{
    res.delete('Delete incomes ')
});

module.exports= incomesRouter