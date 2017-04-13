import React from 'react'
import { View } from 'react-native'

const Section = ({ children }) => {
  return (
    <View style={styles.containerStl}>
      {children}
    </View>
  )
}

const styles = {
  containerStl: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    elevation: 1,
    marginTop: 3,
    position: 'relative',
    backgroundColor: '#FAFAFA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
}

export { Section }
