import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStl, labelStl, containerStl } = styles
  return (
    <View style={containerStl}>
      <Text style={labelStl}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStl}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = {
  inputStl: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStl: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStl: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input }
