import React, { Component } from 'react'
import { View } from 'react-native'
import { MCard, CardLinkIcon } from './common'

class RecordingSettings extends Component {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <MCard>
          <CardLinkIcon icon="directions-bike" text="Sport" set onPress={() => console.log('press')} />
          <CardLinkIcon icon="directions-bike" text="Sport" onPress={() => console.log('press')} />
        </MCard>
      </View>
    )
  }
}

export default RecordingSettings
