import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const Section = ({ children }) => {
  return (
    <View style={styles.containerStl}>
      {children}
    </View>
  )
}

export { Section }
