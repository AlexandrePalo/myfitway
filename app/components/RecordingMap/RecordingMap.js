import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Location, Permissions, MapView } from 'expo'
import { Spinner } from '../'
import { styles } from './styles'

class RecordingMapUnlinked extends Component {
  state = {
    location: null,
    errorMessage: null
  }

  componentWillMount() {
    this.getLocationAsync()
  }

  componentDidMount() {
    this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      })
    }

    const location = await Location.getCurrentPositionAsync({})
    this.setState({ location })
  }

  animateToCurrentPosition() {
    this.getLocationAsync()
    this.map.animateToCoordinate(this.state.location.coords, 1000)
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <View style={styles.containerStl}>
          <Text>{this.state.errorMessage}</Text>
        </View>
      )
    }
    if (!this.state.location) {
      return (
        <View style={styles.containerStl}>
          <Spinner size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <MapView
          ref={map => {
            this.map = map
          }}
          style={styles.map}
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
          mapType={this.props.mapType !== 'openstreetmap' ? this.props.mapType : 'none'}
          showsUserLocation
          showsMyLocationButton={false}
          followsUserLocation
        >
          {this.props.mapType === 'openstreetmap' && <MapView.UrlTile urlTemplate="http://b.tile.openstreetmap.org/{z}/{x}/{y}.png" />}
        </MapView>
      </View>
    )
  }
}

//<MapView.UrlTile urlTemplate="http://a.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png" />

const RecordingMap = connect(null, null)(RecordingMapUnlinked)

export { RecordingMap }
