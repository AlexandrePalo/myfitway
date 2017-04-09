import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MCard } from './common'
import Map from './common/Map'

const tracerWelcome = () => {
  const {
    containerStl,
    durationStl,
    infoContainerStl,
    distanceSpeedInfoContainerStl,
    positivNegativStepInfoContainerStl,
    distanceInfoContainerStl,
    speedInfoContainerStl,
    positivStepInfoContainerStl,
    negativStepInfoContainerStl,
    durationTextStl,
    infoTextStl,
    infoIconStl
  } = styles
  return (
    <View style={containerStl}>
      <MCard>
        <View style={durationStl}>
          <Text style={durationTextStl}>12:31</Text>
        </View>
        <View style={infoContainerStl}>
          <View style={distanceSpeedInfoContainerStl}>
            <View style={distanceInfoContainerStl}>
              <Icon name="all-inclusive" size={20} color="#000" style={infoIconStl} />
              <Text style={infoTextStl}>15</Text>
              <Text style={infoTextStl}>km</Text>
            </View>
            <View style={speedInfoContainerStl}>
              <Icon name="equalizer" size={20} color="#000" style={infoIconStl} />
              <Text style={infoTextStl}>20</Text>
              <Text style={infoTextStl}>km/h</Text>
            </View>
          </View>
          <View style={positivNegativStepInfoContainerStl}>
            <View style={positivStepInfoContainerStl}>
              <Icon name="trending-up" size={20} color="#000" style={infoIconStl} />
              <Text style={infoTextStl}>300</Text>
              <Text style={infoTextStl}>m</Text>
            </View>
            <View style={negativStepInfoContainerStl}>
              <Icon name="trending-down" size={20} color="#000" style={infoIconStl} />
              <Text style={infoTextStl}>200</Text>
              <Text style={infoTextStl}>m</Text>
            </View>
          </View>
        </View>
      </MCard>
      <Map />
    </View>
  )
}

const styles = {
  containerStl: {
    paddingTop: 55
  },
  durationStl: {
    alignSelf: 'center'
  },
  infoContainerStl: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  distanceSpeedInfoContainerStl: {
    flexDirection: 'column'
  },
  positivNegativStepInfoContainerStl: {
    flexDirection: 'column'
  },
  distanceInfoContainerStl: {
    flexDirection: 'row'
  },
  speedInfoContainerStl: {
    flexDirection: 'row'
  },
  positivStepInfoContainerStl: {
    flexDirection: 'row'
  },
  negativStepInfoContainerStl: {
    flexDirection: 'row'
  },
  durationTextStl: {
    color: '#000',
    opacity: 0.87,
    fontSize: 30
  },
  infoTextStl: {
    color: '#000',
    opacity: 0.54,
    fontSize: 20,
    marginLeft: 10
  },
  infoIconStl: {
    color: '#000',
    opacity: 0.54,
    marginTop: 4
  }
}

export default tracerWelcome
