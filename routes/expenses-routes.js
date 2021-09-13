const express = require ('express')
const expenseRouter = express.Router()
let expenses =[] 
const expenseModel = require("../models/expenses");
    

expenseRouter.get('/',async(req,res)=>{
    
    const expenses  = await expenseModel.find({});
    try {
      res.send(expenses);
    } catch (error) {
      res.status(500).send(error);
    }
  });
//find by expense-group 
expenseRouter.get('/expensegroup/:expensegroupId', async (req,res) =>{
    const expenses  = await expenseModel.find({expenseGroup:req.params.expensegroupId}); 
    try {
      res.send(expenses);
    } catch (error) {
      res.status(500).send(error);
    }
  });
 


expenseRouter.get('/:id',async(req,res)=>{
    
    const expenses = await expenseModel.findOne({id:req.params.id});
    try{
       res.send(expenses)
    }catch(error){
      res.status(500).send(error);
    }
});

expenseRouter.post('/', async(req,res) => {
    const expenses = new expenseModel(req.body);
    try {
        await expenses.save();
        res.send(expenses);
      } catch (error) {
        res.status(500).send(error);
      }
});
 
expenseRouter.put('/:id', async(req,res) => {
    var query = {'id': req.params.id};
     newData = req.body;
    const expenses = await expenseModel.findOneAndUpdate(query, req.body);
      try {
       await expenses.save();
        res.send(expenses);
      } catch (error) {
        res.status(500).send(error);
      }
});


expenseRouter.delete('/:id', async (req,res) =>{
    const expenses =  await expenseModel.deleteOne({id:req.params.id});
    try {
      res.send(expenses);
     } catch (error) {
       res.status(500).send(error);
     }

});

module.exports= expenseRouter;

