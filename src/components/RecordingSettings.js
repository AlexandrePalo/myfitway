import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, LinkIcon } from './sober'

class RecordingSettings extends Component {
  render() {
    return (
      <View style={{ marginTop: 54 }}>
        <Card>
          <LinkIcon icon="directions-bike" text="Selectionner le sport" onPress={() => console.log('press')} />
          <LinkIcon icon="pets" text="Selectionner le parcours à suivre" onPress={() => console.log('press')} last />
        </Card>
      </View>
    )
  }
}

export default RecordingSettings
