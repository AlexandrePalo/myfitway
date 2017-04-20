import React from 'react'
import { View, TextInput } from 'react-native'

const Input = (props) => {
  const { placeholder, onChangeText, value, last } = props
  const styles = {
    containerStl: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    inputStl: {
      borderBottomWidth: last ? 0 : 1,
      borderBottomColor: '#eeeeee',
      flex: 1,
      paddingBottom: 10,
      paddingTop: 10
    }
  }
  const { containerStl, inputStl } = styles
  return (
    <View style={containerStl}>
      <TextInput
        value={value}
        style={inputStl}
        placeholder={placeholder}
        onChangeText={onChangeText}
        selectionColor='#00AA8D'
        underlineColorAndroid='transparent'
        
      />
    </View>
  )
}

export { Input }
