import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from './styles'

const Input = props => {
  const { placeholder, onChangeText, value, last, ...otherProps } = props
  const selfStyles = {
    inputStl: {
      borderBottomWidth: last ? 0 : 1,
      borderBottomColor: '#eeeeee',
      flex: 1,
      paddingBottom: 10,
      paddingTop: 10
    }
  }

  return (
    <View style={styles.containerStl}>
      <TextInput value={value} style={selfStyles.inputStl} placeholder={placeholder} onChangeText={onChangeText} selectionColor="#00AA8D" underlineColorAndroid="transparent" {...otherProps} />
    </View>
  )
}

export { Input }
