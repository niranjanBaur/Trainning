import { Card, CardContent, Typography } from '@mui/material'
import { margin } from '@mui/system'
import React from 'react'
import Todo from '../Todo/Todo'

export default function MuiCard() {
  return (
    <Card sx ={{maxWidth:'60%', backgroundColor:"#17164a", margin:'auto', marginTop:'20px'}}>
        <CardContent>
            <Todo/>
        </CardContent>
    </Card>
  )
}
