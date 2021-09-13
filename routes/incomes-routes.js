const express = require ('express')
const incomesRouter = express.Router()
const incomes =[] 
const incomeModel = require("../models/incomes");

incomesRouter.get('/',async(req,res)=>{
    const incomes  = await incomeModel.find({});
    try {
      res.send(incomes);
    } catch (error) {
      res.status(500).send(error);
    }
  });



incomesRouter.get('/:id',async(req,res)=>{
   
    const incomes = await incomeModel.findOne({id:req.params.id});
    try{
       res.send(incomes)
    }catch(error){
      res.status(500).send(error);
    }
});

//find by income-group 
incomesRouter.get('/incomegroup/:incomegroupId', async (req,res) =>{
    const incomes  = await incomeModel.find({incomeGroup:req.params.incomegroupId}); 
    try {
      res.send(incomes);
    } catch (error) {
      res.status(500).send(error);
    }
  });
 



incomesRouter.post('/', async(req,res) => {
    
    const incomes = new incomeModel(req.body);
    try {
        await incomes.save();
        res.send(incomes);
      } catch (error) {
        res.status(500).send(error);
      }
    
});


incomesRouter.put('/:id', async(req,res) => {
  
    var query = {'id': req.params.id};
    newData = req.body;
    const incomes = await incomeModel.findOneAndUpdate(query, req.body);
      try {
       await incomes.save();
        res.send(incomes);
      } catch (error) {
        res.status(500).send(error);
      }

});


incomesRouter.delete('/:id', async(req,res) =>{
    const incomes =  await incomeModel.deleteOne({id:req.params.id});
    try {
      res.send(incomes);
     } catch (error) {
       res.status(500).send(error);
     }
});

module.exports= incomesRouter;
