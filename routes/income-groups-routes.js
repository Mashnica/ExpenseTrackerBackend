const express = require('express')
const incomeGroupRouter = express.Router()
const incomeGroups = [] //name,description
const { uuid } = require('uuidv4');


//get all
incomeGroupRouter.get('/',function(req,res){
    //res.send('Get all income groups')
    res.json(incomeGroups);
  });


//get by id 
//...
//post
incomeGroupRouter.post('/', (req,res) => {
    //res.send('Add income groups')
    const incomegroup = req.body;
    incomegroup.id = uuid() 
    incomeGroups.push(incomegroup)
    res.json(incomegroup);
    
});

//put
incomeGroupRouter.put('/income-groups', (req,res) => {
    res.send('Edit income group ')
});
//delete
incomeGroupRouter.delete('/income-group', (req,res) =>{
    res.delete('Delete income group ')
});


module.exports= incomeGroupRouter