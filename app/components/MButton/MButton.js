import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Spinner } from '../Spinner'

class MButton extends Component {
  renderText() {
    const { loading, children, textStyle } = this.props
    const { baseTextStyle } = styles
    if (loading) {
      return <Spinner size="small" />
    }
    return <Text style={Object.assign({}, baseTextStyle, textStyle)}>{children}</Text>
  }

  render() {
    const { baseButtonStyle, buttonLoadingStyle } = styles
    const { onPress, disabled, buttonStyle } = this.props
    if (disabled) {
      return (
        <TouchableOpacity onPress={onPress} style={[buttonLoadingStyle, baseButtonStyle]}>
          {this.renderText()}
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity onPress={onPress} style={Object.assign({}, baseButtonStyle, buttonStyle)}>
        {this.renderText()}
      </TouchableOpacity>
    )
  }
}

export { MButton }
