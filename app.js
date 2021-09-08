const { Router } = require('express')
const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const expenseGroupRouter = require('./routes/expense-groups-routes.js')
const expenseRouter = require('./routes/expense-routes.js')
const incomeGroupRouter = require('./routes/income-groups-routes.js')
const incomesRouter = require('./routes/income-routes.js')


//const expenseGroups = [] //name,description
//const expenses = [] //description,amount,expense group
//const incomeGroups = [] //name,description
//const incomes = [] //description,amount,income group

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello world!!')
})

app.use("/expense-groups", expenseGroupRouter)
app.use("/expenses", expenseRouter)
app.use("/income-groups", incomeGroupRouter)
app.use("/incomes", incomesRouter)
app.listen(3000)
/*
    const expenseGroupRouter = ... new ()
    expenseGroupRouter.get('/',function(req,res){
    res.send('Get all Expense groups')


    app.use("/expense-groups", expenseGroupRouter)
})
*/
//route expense-group 
/*router.get('/expense-groups',function(req,res){
    res.send('Get all Expense groups')
})
//Object?
router.post('/expense-groups', (req,res) => {
    //res.send('Add Expense groups')
    const expensegroup = expenseGroups.push(req.body);
    res.json(expense);
});
router.put('/expense-groups',function(req,res){
    res.send('Edit Expense groups')
})
router.delete('/expense-groups',function(req,res){
    res.send('delete Expense groups')
})*/
//route expenses
router.get('/expenses',function(req,res){
    res.send('Get all expenses ')
})
router.post('/expenses',function(req,res){
    res.send('Add expense')
})
router.put('/expenses',function(req,res){
    res.send('Edit expense')
})
router.delete('/expenses',function(req,res){
    res.send('delete expense')
})

//route income groups
router.get('/income-groups',function(req,res){
    res.send('Get all eincome-groups ')
})
router.post('/income-groups',function(req,res){
    res.send('Add income-group')
})
router.put('/income-groups',function(req,res){
    res.send('Edit income-group')
})
router.delete('/income-groups',function(req,res){
    res.send('delete income-group')
})

//route incomes
router.get('/incomes',function(req,res){
    res.send('Get all incomes ')
})
router.post('/incomes',function(req,res){
    res.send('Add income')
})
router.put('/incomes',function(req,res){
    res.send('Edit income')
})
router.delete('/incomes',function(req,res){
    res.send('delete income')
})

//app.use('/expense-groups',expensegroups)

//app.use('/expenses',expenses)

//app.use('/income-groups',incomegroups)

//app.use('/incomes',incomes)


// const expenseGroupes = []
// const router = new Router()
// ...
// app.use("/expense-groups", router)
/*app.listen(port,()=>{
   console.log('Example app listening at http://localhost:${ port }')
})*/




//load the router module in the app
//module.exports= router