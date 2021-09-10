const express = require ('express')
const incomesRouter = express.Router()
const incomes =[] 
const { uuid } = require('uuidv4');


incomesRouter.get('/',function(req,res){
    
    res.json(incomes);
  });



incomesRouter.get('/:id',function (req,res){
   
    const result  = incomes.find(income => income.id === req.params.id)
    res.json(result);
});


incomesRouter.post('/', (req,res) => {
    
    const income = req.body;
    income.id = uuid() 
    incomes.push(income)
    res.json(income);
    
});


incomesRouter.put('/:id', (req,res) => {
  
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


incomesRouter.delete('/:id', (req,res) =>{
    incomes = incomes.filter(income => income.id !== req.params.id);
        res.json(incomes);
});

module.exports= incomesRouter