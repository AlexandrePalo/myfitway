import React from 'react'
import { Text, View } from 'react-native'

const TrackSection = (props) => {
  const { iconName, title, children } = props
  const { containerStl, titleContainerStl, iconStl, titleStl } = styles
  return (
    <View style={containerStl}>
      <View style={titleContainerStl}>
          <View style={iconStl}>
            <Text>{iconName}</Text>
          </View>
          <View style={titleStl}>
            <Text>{title}</Text>
          </View>
      </View>
      {children}
    </View>
  )
}

const styles = {
  containerStl: {
  },
  titleContainerStl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    height: 36
  },
  iconStl: {
    opacity: 0.38
  },
  titleStl: {
    marginLeft: 16,
    opacity: 0.54
  }
}

export { TrackSection }
