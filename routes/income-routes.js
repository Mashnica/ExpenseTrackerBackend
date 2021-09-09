const express = require ('express')
const incomesRouter = express.Router()
const incomes =[] //name, amount, incomegroupID

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
    const incomes = req.body;
    incomes.id = uuid() 
    incomes.push(expensegroup)
    res.json(incomes);
    
});

//put 
incomesRouter.put('/:id', (req,res) => {
    //res.send('Edit incomes  ')
    incomes = incomes.map(incomes => {
        if(incomes.id === req.params.id){
            if(req.body.amount){
              incomes.amount = req.body.amount;
              incomes.push(incomes)
              res.json(incomes)
              
            }
            if(req.body.description){
                incomes.description= req.body.description;
                  
            }

         return incomes;
        }
        else {
        return incomes;
        }
    });

});

//delete
incomesRouter.delete('/:id', (req,res) =>{
    incomes = incomes.filter(income => income.id !== req.params.id);
        res.json(incomes);
});

module.exports= incomesRouter