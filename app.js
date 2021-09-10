const { Router } = require('express')
const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const expenseGroupRouter = require('./routes/expense-groups-routes.js')
const expenseRouter = require('./routes/expenses-routes.js')
const incomeGroupRouter = require('./routes/income-groups-routes.js')
const incomesRouter = require('./routes/incomes-routes.js')



app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello world!!')
})

app.use("/expense-groups", expenseGroupRouter)
app.use("/expenses", expenseRouter)
app.use("/income-groups", incomeGroupRouter)
app.use("/incomes", incomesRouter)
app.listen(3000)


