import { Card, CardContent } from '@mui/material'
import React from 'react'
import Todo from '../Todo/Todo'

export default function MuiCard(props) {
  return (
    <Card sx ={{maxWidth:'60%', backgroundColor:"#17164a", margin:'auto', marginTop:'20px'}}>
        <CardContent>
            {props.ele}
        </CardContent>
    </Card>
  )
}
