const express = require('express')
const incomeGroupRouter = express.Router()
const incomeGroups = [] 
const { uuid } = require('uuidv4');
const incomegroupModel = require("../models/income-groups");


incomeGroupRouter.get('/',function(req,res){
    
    res.json(incomeGroups);
  });



incomeGroupRouter.get('/:id',function (req,res){
    
    const result  = incomeGroups.find(incomeGroup=> incomeGroup.id === req.params.id)
    res.json(result);
});

incomeGroupRouter.post('/', (req,res) => {
  
    const incomegroup = req.body;
    incomegroup.id = uuid() 
    incomeGroups.push(incomegroup)
    res.json(incomegroup);
    
});


incomeGroupRouter.put('/:id', (req,res) => {
    incomeGroups = incomeGroups.map(incomeGroup  => {
        if(incomeGroup.id === req.params.id){
            if(req.body.name){
              incomeGroup.name = req.body.name;
              
              
            }
            if(req.body.description){
              incomeGroup.description= req.body.name;
                  
            }
        incomeGroups.push(incomeGroup)
        res.json(incomeGroup)
        return incomeGroup;
        }
        else {
        return incomeGroup;
        }
    });
});

incomeGroupRouter.delete('/:id', (req,res) =>{
    incomeGroups = incomeGroups.filter(incomeGroup => incomeGroup.id !== req.params.id);
    res.json(incomeGroups);
 
});


module.exports= incomeGroupRouter;
