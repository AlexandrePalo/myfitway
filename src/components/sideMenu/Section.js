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
    marginTop: 2,
    borderBottomColor: '#757575',
    borderBottomWidth: 1
  }
}

export { Section }
