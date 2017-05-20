import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const Card = ({ children }) => {
  const { containerStl } = styles
  return (
    <View style={containerStl}>
      {children}
    </View>
  )
}

export { Card }
