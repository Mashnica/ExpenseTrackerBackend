const express = require('express')
const incomeGroupRouter = express.Router()
const incomeGroups = [] 
const incomegroupModel = require("../models/income-groups");


incomeGroupRouter.get('/',async(req,res) =>{
    
    const incomegroups  = await incomegroupModel.find({});
      try {
        res.send(incomegroups);
      } catch (error) {
        res.status(500).send(error);
      }
  });



incomeGroupRouter.get('/:id',async (req,res)=>{
    
    const incomegroups = await incomegroupModel.findOne({id:req.params.id});
         try{
            res.send(incomegroups)
         }catch(error){
           res.status(500).send(error);
         }
});

incomeGroupRouter.post('/', async(req,res) => {
  
    const incomegroups = new incomegroupModel(req.body);
        try {
            await incomegroups.save();
            res.send(incomegroups);
          } catch (error) {
            res.status(500).send(error);
          }
    
});


incomeGroupRouter.put('/:id', async(req,res) => {
    var query = {'id': req.params.id};
    newData = req.body;
    const incomegroups = await incomegroupModel.findOneAndUpdate(query, req.body);
      try {
       await incomegroups.save();
        res.send(incomegroups);
      } catch (error) {
        res.status(500).send(error);
      }
});

incomeGroupRouter.delete('/:id', async(req,res) =>{
    const incomegroups =  await incomegroupModel.deleteOne({id:req.params.id});
        try {
          res.send(incomegroups);
         } catch (error) {
           res.status(500).send(error);
         }
 
 
});


module.exports= incomeGroupRouter;
