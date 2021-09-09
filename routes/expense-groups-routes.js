//import { v4 as uuidv4 } from 'uuid';


const express = require('express')
const expenseGroupRouter = express.Router()
let expenseGroups = [] //name,description
const { uuid } = require('uuidv4');



    //get all
    expenseGroupRouter.get('/',function(req,res){
      //res.send('Get all Expense groups')
      res.json(expenseGroups);
    });
    //get by id
     expenseGroupRouter.get('/:id',function (req,res){
         //search by id in array expenseGroups
         const result  = expenseGroups.find(expenseGroup => expenseGroup.id === req.params.id)
         res.json(result);
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
        //res.json(newresult);
    });

    //delete
    expenseGroupRouter.delete('/:id', (req,res) =>{
        expenseGroups = expenseGroups.filter(expenseGroup => expenseGroup.id !== req.params.id);
        res.json(expenseGroups);
        //delete element
        //res.remove(resultdelete);
    });


    module.exports= expenseGroupRouter
