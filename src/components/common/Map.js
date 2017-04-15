import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
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
    trkpts: []
  }

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ initialPosition: position })
      },
      (error) => console.log(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({
        lastPosition: position
      })

      if (this.props.recording) {
        this.setState({
          trkpts: [...this.state.trkpts, {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            elevation: position.coords.altitude,
            key: position.coords.altitude + position.coords.longitude + position.timestamp
          }]
        })
      }

    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    const { lastPosition, initialPosition, trkpts } = this.state
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
            coordinates={trkpts}
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
  recording: state.geolocation.recording
})

export default connect(
  mapStateToProps,
  null
)(Map)
