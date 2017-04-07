import React from 'react'
import { View, Text } from 'react-native'

const tracerWelcome = () => {
  const {
    containerStl,
    infoContainerStl,
    distanceSpeedInfoContainerStl,
    positivNegativStepInfoContainerStl
  } = styles
  return (
    <View style={containerStl}>
      <Text>12:31</Text>
      <View style={infoContainerStl}>
        <View style={distanceSpeedInfoContainerStl}>
          <View>
            <Text>15</Text>
            <Text>km</Text>
          </View>
          <View>
            <Text>20</Text>
            <Text>km/h</Text>
          </View>
        </View>
        <View style={positivNegativStepInfoContainerStl}>
          <View>
            <Text>+</Text>
            <Text>300</Text>
          </View>
          <View>
            <Text>-</Text>
            <Text>200</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = {
  containerStl: {
    paddingTop: 55
  },
  infoContainerStl: {

  },
  distanceSpeedInfoContainerStl: {

  },
  positivNegativStepInfoContainerStl: {

  }
}

export default tracerWelcome
