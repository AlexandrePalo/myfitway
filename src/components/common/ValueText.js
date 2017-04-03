import React, { Component } from 'react'
import { Text } from 'react-native'

class ValueText extends Component {
  render() {
    const { value, unit, style } = this.props
    return (
      <Text style={style}>
        {value} {unit}
      </Text>
    )
  }
}

export { ValueText }
