import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from './styles'

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStl}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

export { Spinner }
