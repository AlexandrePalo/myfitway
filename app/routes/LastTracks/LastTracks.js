import React, { Component } from 'react'
import { View } from 'react-native'
import { TrackListItem } from '../../components'

class LastTracks extends Component {
  render() {
    return (
      <View>
        <TrackListItem title="Titre" distance={50} place="Metz 57" date="01/01/2017" description="Petite description" />
      </View>
    )
  }
}

export { LastTracks }
