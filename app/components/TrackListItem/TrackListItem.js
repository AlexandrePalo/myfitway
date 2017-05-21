import React from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'

const TrackListItem = props => {
  const { title, distance, place, date, description, done } = props
  const { containerStl, iconStl, trackStl, infoStl, titleTextStl, infoTextStl, descriptionTextStl } = styles
  return (
    <View style={containerStl}>
      <View style={iconStl}>
        <MaterialIcons name={done ? 'done' : 'file-download'} size={40} color="#000" />
      </View>
      <View style={trackStl}>
        <Text style={titleTextStl}>{title}</Text>
        <View style={infoStl}>
          <Text style={infoTextStl}>{distance} km</Text>
          <Text style={infoTextStl}>{place}</Text>
          <Text style={infoTextStl}>{date}</Text>
        </View>
        <Text style={descriptionTextStl}>{description}</Text>
      </View>
    </View>
  )
}

export { TrackListItem }
