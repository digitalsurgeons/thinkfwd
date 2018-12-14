import React from 'react'
import { Input, TextField } from './styles'

export default ({ ...other }) => {
  return (
    <TextField>
      <Input {...other} />
    </TextField>
  )
}
