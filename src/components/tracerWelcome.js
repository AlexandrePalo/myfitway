import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import { MCard, MButtonRaised, RecordingMap } from './common'
import {
  startRecordingGeo,
  stopRecordingGeo,
  resetRecordingGeo
} from '../redux/actions'

class TracerWelcome extends Component {
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
    if (this.props.trkpts.length !== 0) {
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
              onPress={() => {
                this.props.stopRecordingGeo()
                Actions.finalize({ type: 'reset' })
              }
            }
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

    const { trkpts, stepUp, stepDown } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={containerStl}>
          <RecordingMap />
        </View>
        <View style={containerCardStl}>
          <MCard>
            <View style={durationStl}>
              <Text style={durationTextStl}>
                0:0
              </Text>
            </View>
            <View style={infoContainerStl}>
              <View style={distanceSpeedInfoContainerStl}>
                <View style={distanceInfoContainerStl}>
                  <Icon name="all-inclusive" size={20} color="#000" style={infoIconStl} />
                  <Text style={infoTextStl}>{
                    (trkpts.length > 0) ? Math.round(_.last(trkpts).distance) : 0
                  }</Text>
                  <Text style={infoTextStl}>m</Text>
                </View>
                <View style={speedInfoContainerStl}>
                  <Icon name="equalizer" size={20} color="#000" style={infoIconStl} />
                  <Text style={infoTextStl}>{
                    (trkpts.length > 0) ? Math.round(_.last(trkpts).instantSpeed) : 0
                  }</Text>
                  <Text style={infoTextStl}>km/h</Text>
                </View>
              </View>
              <View style={positivNegativStepInfoContainerStl}>
                <View style={positivStepInfoContainerStl}>
                  <Icon name="trending-up" size={20} color="#000" style={infoIconStl} />
                  <Text style={infoTextStl}>{Math.round(stepUp)}</Text>
                  <Text style={infoTextStl}>m</Text>
                </View>
                <View style={negativStepInfoContainerStl}>
                  <Icon name="trending-down" size={20} color="#000" style={infoIconStl} />
                  <Text style={infoTextStl}>{Math.round(stepDown)}</Text>
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
    paddingTop: 54,
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
  const { recording, trkpts, stepUp, stepDown } = state.geolocation.recording
  return {
    recording,
    trkpts,
    stepUp,
    stepDown
  }
}

export default connect(
  mapStateToProps,
  { startRecordingGeo, stopRecordingGeo, resetRecordingGeo }
)(TracerWelcome)
