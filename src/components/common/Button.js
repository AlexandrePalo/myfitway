import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children, buttonStyle }) => {
  const { baseButtonStyle, textStyle } = styles
  return (
    <TouchableOpacity
      onPress={onPress}
      style={() => Object.assign({}, baseButtonStyle, buttonStyle)}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600'
  },
  baseButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}

export { Button }
