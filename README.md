# **Expense Tracker-backend app**
***
**Installation**
--- 
* **install express**
  
  npm install express --save

* **clone repository**

  git clone https://git.vegaitsourcing.rs/masa.micunovic/expense-tracker-backend-app.git

* **install mongoose**

  npm install express mongoose --save 

* **run application**

  npm run start:dev


* **git commands**
  * git checkout feauture/database 
  * git add .
  * git commit -m "First commit"
  * git push origin feature/database --on branch
  * git merge master feature/database

***
**Appliction functionalities**
---
  
* CRUD expense-groups 
    * getAll,getById,post,put and delete methods for expense-groups
* CRUD expenses  
    * getAll,getById,post,put and delete methods for expenses
* CRUD income-groups 
    * getAll,getById,post,put and delete methods for income-groups
* CRUD incomes  
    * getAll,getById,post,put and delete methods for incomes
    
* routes: /expenses/last-five and 
            /incomes/last-five 
              -show last 5 expenses and last 5 incomes changes
* routes: /expensegroup/:expensegroupId and 
            /incomegroup/:incomegroupId
              -show filtering by group
