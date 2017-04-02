import React from 'react'
import { View } from 'react-native'

const Card = ({ children }) => {
  const { containerStl } = styles
  return (
    <View style={containerStl}>
      {children}
    </View>
  )
}

const styles = {
  containerStl: {
    borderBottomWidth: 0,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10
  }
}

export { Card }
