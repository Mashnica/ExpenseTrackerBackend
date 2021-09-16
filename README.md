# **Expense Tracker-backend app**
***
**Getting started:**
--- 
      run npm install

* **clone repository**

  git clone https://git.vegaitsourcing.rs/masa.micunovic/expense-tracker-backend-app.git


* **run application**

  npm run start:dev

***
**Appliction functionalities**
---
  
* CRUD methods for expense-groups 
    * getAll  -returns all expense groups.
    * getById -returns an element object representing the element whose id property matches the specified string.
    * post - add a new expense group.
    * put - update the expense group on the server. 
    * delete - remove expense group whose id property matches the specified string.
* CRUD methods for expenses  
    * getAll  -returns all expenses.
    * getById -returns an expense object representing the element whose id property matches the specified string.
    * post - add a new expense.
    * put - update the expense on the server. 
    * delete - remove expense whose id property matches the specified string.
* CRUD income-groups 
    * getAll  -returns all income groups.
    * getById -returns an income group object representing the element whose id property matches the specified string.
    * post - add a new income group.
    * put - update the income group on the server. 
    * delete - remove income group whose id property matches the specified string.
* CRUD incomes  
    * getAll  -returns all incomes.
    * getById -returns an income  object representing the element whose id property matches the specified string.
    * post - add a new income.
    * put - update the income on the server. 
    * delete - remove income  whose id property matches the specified string.
    
* routes: 
    * (GET) /expenses/last-five -show last 5 expenses filtering by dateUpdated
    * (GET) /incomes/last-five  -show last 5 incomes  filtering by dateUpdated

* routes: 
    * (GET) /expensegroup/:expensegroupId - show expenses filtering by  expense group
    * (GET) /incomegroup/:incomegroupId -show incomes filtering by  income group
