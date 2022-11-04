import React from 'react'
import ExpenseItem from './Components/Expense/ExpenseItem'
import Expense from './Components/Expense/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'

export default function App() {

  const expence = [
    {
      id:'e1',
      title : "Car Insurance",
      amount : 3445,
      date : new Date(2020,0,2)
    },
    {
      id:'e2',
      title : "Bike Insurance",
      amount : 1398,
      date : new Date(2021,1,5)
    },
    {
      id:'e3',
      title : "Health Insurance",
      amount : 2717,
      date : new Date(2021,2,9)
    },
    {
      id:'e4',
      title : "Home Insurance",
      amount : 3445,
      date : new Date(2020,2,24)
    }
  ]

  return (
    <div >
      <NewExpense/>
      <Expense items = {expence}/>
    </div>
  )
}
