import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SmoothLine } from 'react-native-pathjs-charts'
import { chartDatasetAltDis } from '../gpx'
import { shortFrenchHumanizer } from '../tools'
import { MCard, DisplayTrackMap } from './common'

class TrackDetails extends Component {
  state = {
    selectedPoint: null
  }

  render() {
    const { infoContainerStl, distanceDurationInfoContainerStl, distanceInfoContainerStl,
    durationInfoContainerStl, infoTextStl, infoIconStl, positivNegativStepInfoContainerStl,
    positivStepInfoContainerStl, negativStepInfoContainerStl, simpleContainerStl } = styles

    const dataset = [chartDatasetAltDis(this.props.trkpts)]
    console.log(Dimensions.get('window').width)
    const options = {
      height: 250,
      width: Dimensions.get('window').width - 32,
      color: '#2980B9',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    return (
      <View>
        <MCard>
          <View style={infoContainerStl}>
            <View style={distanceDurationInfoContainerStl}>
              <View style={distanceInfoContainerStl}>
                <Icon name="all-inclusive" size={20} color="#000" style={infoIconStl} />
                <Text style={infoTextStl}>{Math.round(this.props.distance)}</Text>
                <Text style={infoTextStl}>m</Text>
              </View>
              <View style={durationInfoContainerStl}>
                <Icon name="timer" size={20} color="#000" style={infoIconStl} />
                <Text style={infoTextStl}>{shortFrenchHumanizer(this.props.duration * 1000)}</Text>
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
        </MCard>
        <View style={simpleContainerStl}>
          <SmoothLine data={dataset} options={options} xKey='x' yKey='y' />
        </View>
        <View style={simpleContainerStl}>
          <DisplayTrackMap trkpts={this.props.trkpts} />
        </View>
      </View>
    )
  }
}

const styles = {
  simpleContainerStl: {
    height: 250,
    elevation: 2,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
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
  durationInfoContainerStl: {
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
}

export default TrackDetails
