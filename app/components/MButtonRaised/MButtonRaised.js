import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from './styles'
import { Spinner } from '../'

class MButtonRaised extends Component {
  renderText() {
    const { loading, children } = this.props
    const { textStyle } = styles
    if (loading) {
      return <Spinner size="small" />
    }
    return <Text style={textStyle}>{children}</Text>
  }

  render() {
    const { baseButtonStyle, buttonLoadingStyle } = styles
    const { onPress, disabled, buttonStyle } = this.props
    if (disabled) {
      return (
        <View onPress={onPress} style={[buttonLoadingStyle, baseButtonStyle]}>
          {this.renderText()}
        </View>
      )
    }
    return (
      <TouchableHighlight onPress={onPress} style={Object.assign({}, baseButtonStyle, buttonStyle)} underlayColor="#3f51b5">
        {this.renderText()}
      </TouchableHighlight>
    )
  }
}

export { MButtonRaised }
