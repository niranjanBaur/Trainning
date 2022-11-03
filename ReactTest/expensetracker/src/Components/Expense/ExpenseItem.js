import React from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'

export default function ExpenseItem(props) {

  // const expenseDate = new Date(2022,11,3)
  // const expenseTitle = "Car Insurance"
  // const expenseAmount = "₹ 2915.23"

  return (

    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>
        ₹ {props.amount}
        </div>
      </div>
    </div>
  )
}
