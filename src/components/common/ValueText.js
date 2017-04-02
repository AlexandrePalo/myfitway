import React, { Component } from 'react'
import { Text } from 'react-native'

class ValueText extends Component {
  render() {
    const { value, unit } = this.props
    return (
      <Text>
        {value} {unit}
      </Text>
    )
  }
}

export { ValueText }
