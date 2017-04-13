import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { Spinner } from './index'

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
      <View
        onPress={onPress}
        style={[buttonLoadingStyle, baseButtonStyle]}
      >
        {this.renderText()}
      </View>
      )
    }
    return (
      <TouchableHighlight
        onPress={onPress}
        style={Object.assign({}, baseButtonStyle, buttonStyle)}
        underlayColor="#3f51b5"
      >
          {this.renderText()}
      </TouchableHighlight>
    )
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  baseButtonStyle: {
    backgroundColor: '#3949ab',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#3949ab',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3
  },
  buttonLoadingStyle: {
    height: 34,
    backgroundColor: '#3f51b5'
  }
}

export { MButtonRaised }
