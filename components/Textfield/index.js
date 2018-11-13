import React from 'react'
import { TextField, Input, Bar, Label } from './styles'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: false,
      hasValue: false || props.defaultValue
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onBlur(e) {
    this.setState({ focused: false })
    if (e.target.value) {
      this.setState({ hasValue: true })
    } else {
      this.setState({ hasValue: false })
    }
  }

  onFocus() {
    this.setState({ focused: true })
  }

  render() {
    const { inverse = false } = this.props
    return (
      <TextField inverse={inverse}>
        <Input
          inverse={inverse}
          defaultValue={this.props.defaultValue}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          required
        />
        <Bar focused={this.state.focused} />
        <Label
          inverse={inverse}
          shrink={this.state.focused || this.state.hasValue}>
          {this.props.floatingLabelText}
        </Label>
      </TextField>
    )
  }
}
