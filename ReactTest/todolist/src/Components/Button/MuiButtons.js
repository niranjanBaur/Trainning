import React, { Component } from 'react'
import { Button, Stack} from '@mui/material'

export default class MuiButtons extends Component {
  render() {
    return (
      <Stack spacing={2} direction='row'>
         <Button sx={{marginLeft:'10px'}} color="success" variant='contained'>{this.props.title}</Button>
      </Stack>
    )
  }
}
