import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MCard, MButtonRaised } from './common'
import { shortFrenchHumanizer } from '../tools'
import {
  startRecordingGeo,
  stopRecordingGeo,
  resetRecordingGeo
} from '../redux/actions'
import Map from './common/Map'

class tracerWelcome extends Component {
  renderButton() {
    if (this.props.recording) {
      return (
        <MButtonRaised
          onPress={this.props.stopRecordingGeo}
        >
          Stop
        </MButtonRaised>
      )
    }
    if (this.props.duration !== 0) {
      return (
        <View style={styles.buttonsWrapper}>
          <View style={{ flex: 2, marginRight: 3 }}>
            <MButtonRaised
              onPress={this.props.startRecordingGeo}
            >
              Reprendre
            </MButtonRaised>
          </View>
          <View style={{ flex: 2, marginLeft: 3 }}>
            <MButtonRaised
              onPress={this.props.resetRecordingGeo}
            >
              Terminer
            </MButtonRaised>
          </View>
        </View>
      )
    }
    return (
      <MButtonRaised
        onPress={this.props.startRecordingGeo}
      >
        Commencer
      </MButtonRaised>
    )
  }
  render() {
    const {
      containerStl,
      containerCardStl,
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
      <View style={{ flex: 1 }}>
        <View style={containerStl}>
          <Map />
        </View>
        <View style={containerCardStl}>
          <MCard>
            <View style={durationStl}>
              <Text style={durationTextStl}>
                {shortFrenchHumanizer(this.props.duration * 1000)}
              </Text>
            </View>
            <View style={infoContainerStl}>
              <View style={distanceSpeedInfoContainerStl}>
                <View style={distanceInfoContainerStl}>
                  <Icon name="all-inclusive" size={20} color="#000" style={infoIconStl} />
                  <Text style={infoTextStl}>{Math.round(this.props.distance)}</Text>
                  <Text style={infoTextStl}>m</Text>
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
                  <Text style={infoTextStl}>{Math.round(this.props.stepUp)}</Text>
                  <Text style={infoTextStl}>m</Text>
                </View>
                <View style={negativStepInfoContainerStl}>
                  <Icon name="trending-down" size={20} color="#000" style={infoIconStl} />
                  <Text style={infoTextStl}>{Math.round(this.props.stepDown)}</Text>
                  <Text style={infoTextStl}>m</Text>
                </View>
              </View>
            </View>
            {this.renderButton()}
          </MCard>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStl: {
    paddingTop: 55,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
  },
  containerCardStl: {
    position: 'absolute',
    top: 55,
    left: 16,
    right: 16
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
    fontSize: 20
  },
  infoTextStl: {
    color: '#000',
    opacity: 0.54,
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 16
  },
  infoIconStl: {
    color: '#000',
    opacity: 0.54,
    marginTop: 4
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

const mapStateToProps = (state) => {
  const { recording, distance, duration, stepUp, stepDown } = state.geolocation.recording
  return {
    recording,
    distance,
    duration,
    stepUp,
    stepDown
  }
}

export default connect(
  mapStateToProps,
  { startRecordingGeo, stopRecordingGeo, resetRecordingGeo }
)(tracerWelcome)
