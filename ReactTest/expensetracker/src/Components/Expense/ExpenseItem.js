import React,{useState} from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

export default function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title)

  const clickHandler = () =>{
    console.log("Clicked !!!");
    setTitle("hello")
  }

  return (

    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>
        ₹ {props.amount}
        </div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}
