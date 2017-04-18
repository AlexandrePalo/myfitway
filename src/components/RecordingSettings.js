import React, { Component } from 'react'
import { View } from 'react-native'
import { MCard, CardLinkIcon } from './common'

class RecordingSettings extends Component {
  render() {
    return (
      <View style={{ marginTop: 54 }}>
        <MCard>
          <CardLinkIcon icon="directions-bike" text="Selectionner le sport" onPress={() => console.log('press')} />
          <CardLinkIcon icon="pets" text="Selectionner le parcours à suivre" onPress={() => console.log('press')} last />
        </MCard>
      </View>
    )
  }
}

export default RecordingSettings
