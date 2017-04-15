import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import {
  addTrkptRecordingGeo
} from '../../redux/actions'
import { Spinner } from './index'

const styles = {
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
}

class Map extends Component {
  state = {
    initialPosition: null,
    lastPosition: null,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ initialPosition: position })
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition(
      position => this.positionWatcher(position),
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 1 }
    )
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  watchID: ?number = null;

  positionWatcher(position) {
    this.setState({
      lastPosition: position
    })
    if (this.props.recording) {
      this.props.addTrkptRecordingGeo({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        elevation: position.coords.altitude,
      })
    }
  }

  render() {
    const { lastPosition, initialPosition } = this.state
    let region = null
    if (lastPosition) {
      region = {
        latitude: lastPosition.coords.latitude,
        longitude: lastPosition.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    } else if (initialPosition) {
      region = {
        latitude: initialPosition.coords.latitude,
        longitude: initialPosition.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    }
    if (!region) {
      return (
        <View style={styles.container}>
          <Spinner size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
        >
          <MapView.Polyline
            coordinates={this.props.trkpts}
            strokeWidth={2}
            strokeColor='red'
          />
          <MapView.Marker
            coordinate={lastPosition ? lastPosition.coords : initialPosition.coords}
          />
        </MapView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  recording: state.geolocation.recording.recording,
  trkpts: state.geolocation.recording.trkpts
})

export default connect(
  mapStateToProps,
  { addTrkptRecordingGeo }
)(Map)
