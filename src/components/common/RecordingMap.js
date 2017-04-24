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

class RecordingMapUnlinked extends Component {
  state = {
    lastPosition: null,
    mustMapCurrentPosition: false
  }

  componentDidMount() {
    this.props.onRef(this)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ firstPosition: position, lastPosition: position })
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition(
      position => this.positionWatcher(position),
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 20 }
    )
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
    this.props.onRef(undefined)
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
        timestamp: position.timestamp
      })
    }
  }

  animateToCurrentPosition() {
    this.map.animateToCoordinate(this.state.lastPosition.coords, 1000)
  }

  render() {
    const { firstPosition } = this.state
    if (!firstPosition) {
      return (
        <View style={styles.container}>
          <Spinner size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this.map = map }}
          style={styles.map}
          initialRegion={{
            latitude: firstPosition.coords.latitude,
            longitude: firstPosition.coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          mapType={(this.props.mapType !== 'openstreetmap') ? this.props.mapType : 'none'}
          showsUserLocation
          showsMyLocationButton={false}
          followsUserLocation
        >
          <MapView.Polyline
            style={{ zIndex: 5 }}
            coordinates={this.props.trkpts}
            strokeWidth={2}
            strokeColor='red'
          />
          {(this.props.trkpts.length > 0) && <MapView.Marker coordinate={this.props.trkpts[0]} />}
          {(this.props.mapType === 'openstreetmap') && <MapView.UrlTile urlTemplate="http://b.tile.openstreetmap.org/{z}/{x}/{y}.png" />}
        </MapView>
      </View>
    )
  }
}

//<MapView.UrlTile urlTemplate="http://a.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png" />

const mapStateToProps = (state) => ({
  recording: state.geolocation.recording.recording,
  trkpts: state.geolocation.recording.trkpts
})

const RecordingMap = connect(
  mapStateToProps,
  { addTrkptRecordingGeo }
)(RecordingMapUnlinked)

export { RecordingMap }
