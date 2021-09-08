const express = require('express')
const expenseGroupRouter = express.Router()
const expenseGroups = [] //name,description
const { uuid } = require('uuidv4');
    //get all
    expenseGroupRouter.get('/',function(req,res){
      //res.send('Get all Expense groups')
      res.json(expenseGroups);
    });
    //get by id
     expenseGroupRouter.get('/:id',function (req,res){
         //search by id in array expenseGroups
         let expenseGroup;
         req.params.id
         const result  = expenseGroup.find(id => id === req)
         res.json(result);
         /*for(var i=0;i<expenseGroups.length;i++){
            if(expenseGroups[i][id] === value){
                expenseGroup = expenseGroups[i];
                
            }
            return null;
         }
         res.json(expenseGroups[i]);*/
     });

    //post
    expenseGroupRouter.post('/', (req,res) => {
        //res.send('Add Expense groups')
        const expensegroup = req.body;
        expensegroup.id = uuid() // random function
        expenseGroups.push(expensegroup)
        res.json(expensegroup);
        
    });
    //put
    expenseGroupRouter.put('/expense-groups', (req,res) => {
        res.send('Edit expense group ')
    });
    //delete
    expenseGroupRouter.delete('/expense-group', (req,res) =>{
        res.delete('Delete expense group ')
    });

    //app.use("/expense-groups", expenseGroupRouter) pozvati u app.js


    module.exports= expenseGroupRouter
