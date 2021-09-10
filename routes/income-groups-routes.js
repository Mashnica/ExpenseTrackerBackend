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
incomeGroupRouter.get('/:id',function (req,res){
    //search by id in array incomes
    const result  = incomeGroups.find(incomeGroup=> incomeGroup.id === req.params.id)
    res.json(result);
});
//post
incomeGroupRouter.post('/', (req,res) => {
    //res.send('Add income groups')
    const incomegroup = req.body;
    incomegroup.id = uuid() 
    incomeGroups.push(incomegroup)
    res.json(incomegroup);
    
});

//put
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
//delete
incomeGroupRouter.delete('/:id', (req,res) =>{
    incomeGroups = incomeGroups.filter(incomeGroup => incomeGroup.id !== req.params.id);
    res.json(incomeGroups);
 
});


module.exports= incomeGroupRouter