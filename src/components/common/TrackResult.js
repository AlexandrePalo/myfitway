import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TrackResult = (props) => {
  const { title, distance, place, date, description, done } = props
  const { containerStl, iconStl, trackStl, infoStl, titleTextStl, infoTextStl,
    descriptionTextStl } = styles
  return (
    <View style={containerStl}>
      <View style={iconStl}>
        <Icon name={done ? 'done' : 'file-download'} size={40} color="#000" />
      </View>
      <View style={trackStl}>
        <Text style={titleTextStl}>{title}</Text>
        <View style={infoStl}>
          <Text style={infoTextStl}>{distance}</Text>
          <Text style={infoTextStl}>{place}</Text>
          <Text style={infoTextStl}>{date}</Text>
        </View>
        <Text style={descriptionTextStl}>{description}</Text>
    </View>
  </View>
  )
}

const styles = {
  containerStl: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 16
  },
  iconStl: {
    opacity: 0.38
  },
  trackStl: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 16,
    flex: 1
  },
  infoStl: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleTextStl: {
    color: '#000000',
    opacity: 0.87
  },
  infoTextStl: {
    color: '#000000',
    opacity: 0.54
  },
  descriptionTextStl: {
    color: '#000000',
    opacity: 0.38
  }
}

export { TrackResult }
