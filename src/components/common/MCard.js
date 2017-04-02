import React from 'react'
import { View, Text } from 'react-native'

const MCard = ({ children }) => {
  const { containerStl } = styles
  return (
    <View style={containerStl}>
      {children}
    </View>
  )
}

const styles = {
  containerStl: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  }
}

export { MCard }
