import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TrackSection = (props) => {
  const { iconName, title, children } = props
  const { containerStl, titleContainerStl, iconStl, titleStl } = styles
  console.log(iconName)
  return (
    <View style={containerStl}>
      <View style={titleContainerStl}>
          <View style={iconStl}>
            <Icon name={iconName} size={20} color="#000" />
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
