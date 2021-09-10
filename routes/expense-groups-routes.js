const express = require('express')
const expenseGroupRouter = express.Router()
let expenseGroups = [] 
const { uuid } = require('uuidv4');


    expenseGroupRouter.get('/',function(req,res){
      
      res.json(expenseGroups);
    });
     expenseGroupRouter.get('/:id',function (req,res){
         
         const result  = expenseGroups.find(expenseGroup => expenseGroup.id === req.params.id)
         res.json(result);
     });

    
    expenseGroupRouter.post('/', (req,res) => {
        
        const expensegroup = req.body;
        expensegroup.id = uuid()
        expenseGroups.push(expensegroup)
        res.json(expensegroup);
        
    });

 
    expenseGroupRouter.put('/:id', (req,res) => {
        expenseGroups = expenseGroups.map(expenseGroup  => {
            if(expenseGroup.id === req.params.id){
                if(req.body.name){
                  expenseGroup.name = req.body.name;
                
                  
                }
                if(req.body.description){

                    expenseGroup.description= req.body.description;
                      
                }
            expenseGroups.push(expenseGroup)
            res.json(expenseGroup)
            return expenseGroup;
            }
            else {
            return expenseGroup;
            }
        });
       
    });

    
    expenseGroupRouter.delete('/:id', (req,res) =>{
        expenseGroups = expenseGroups.filter(expenseGroup => expenseGroup.id !== req.params.id);
        res.json(expenseGroups);
        
    });


    module.exports= expenseGroupRouter
