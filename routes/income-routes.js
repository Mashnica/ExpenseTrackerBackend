const express = require ('express')
const incomesRouter = express.Router()
const incomes =[] //name, amount, incomegroupID
const { uuid } = require('uuidv4');

//get all
incomesRouter.get('/',function(req,res){
    //res.send('Get all incomes')
    res.json(incomes);
  });


//get by id
incomesRouter.get('/:id',function (req,res){
    //search by id in array expenses
    const result  = incomes.find(income => income.id === req.params.id)
    res.json(result);
});

//post
incomesRouter.post('/', (req,res) => {
    //res.send('Add income ')
    const income = req.body;
    income.id = uuid() 
    incomes.push(income)
    res.json(income);
    
});

//put 
incomesRouter.put('/:id', (req,res) => {
    //res.send('Edit incomes  ')
    incomes = incomes.map(income => {
        if(income.id === req.params.id){
            if(req.body.amount){
              income.amount = req.body.amount;
              
              
            }
            if(req.body.description){
                income.description= req.body.description;
                  
            }
        incomes.push(income)
        res.json(income)
         return income;
        }
        else {
        return income;
        }
    });

});

//delete
incomesRouter.delete('/:id', (req,res) =>{
    incomes = incomes.filter(income => income.id !== req.params.id);
        res.json(incomes);
});

module.exports= incomesRouter