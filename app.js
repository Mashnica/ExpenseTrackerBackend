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


// const expenseGroupes = []
// const router = new Router()
// ...
// app.use("/expense-groups", router)
/*app.listen(port,()=>{
   console.log('Example app listening at http://localhost:${ port }')
})*/




//load the router module in the app
//module.exports= router