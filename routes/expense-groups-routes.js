const express = require('express')
const expenseGroupRouter = express.Router()
let expenseGroups = [] 
const { uuid } = require('uuidv4');
const expensegroupModel = require("../models/expense-group");


   expenseGroupRouter.get('/', async (req,res) =>{
      const expensegroups  = await expensegroupModel.find({});
      try {
        res.send(expensegroups);
      } catch (error) {
        res.status(500).send(error);
      }
    });
      //res.json(expenseGroups);
   
     expenseGroupRouter.get('/:id',function (req,res){
         
         const result  = expenseGroups.find(expenseGroup => expenseGroup.id === req.params.id)
         res.json(result);
     });

    
    expenseGroupRouter.post('/', async (req,res) => {
        const expensegroup = new expensegroupModel(req.body);
        //const expensegroup = req.body;
        //expensegroup.id = uuid()
        try {
            await expensegroup.save();
            res.send(expensegroup);
          } catch (error) {
            res.status(500).send(error);
          }
        
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
   
    
   /* 
    //get endpoint
    app.get("/expense-groups", async (request, response) => {
        const expensegroups = await expensegroupsModel.find({});
      
        try {
          response.send(expensegroups);
        } catch (error) {
          response.status(500).send(error);
        }
      });
      */


    module.exports= expenseGroupRouter;
   
