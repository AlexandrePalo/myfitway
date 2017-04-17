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
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 5 }
    )
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  watchID: ?number = null;

  positionWatcher(position) {
    console.log(position)
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

  render() {
    const { lastPosition, initialPosition } = this.state
    let region = null
    if (lastPosition || initialPosition) {
      region = {
        latitude: lastPosition ? lastPosition.coords.latitude : initialPosition.coords.latitude,
        longitude: lastPosition ? lastPosition.coords.longitude : initialPosition.coords.longitude,
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
          //customMapStyle={customMapStyle}
          showsUserLocation
          showsMyLocationButton
        >
          <MapView.Polyline
            style={{ zIndex: 5 }}
            coordinates={this.props.trkpts}
            strokeWidth={2}
            strokeColor='red'
          />
          {(this.props.trkpts.length > 0) && <MapView.Marker coordinate={this.props.trkpts[0]} />}
        </MapView>
      </View>
    )
  }
}

const customMapStyle = [
  {
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#f5f5f5'
      }
    ]
  },
  {
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#616161'
      }
    ]
  },
  {
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#f5f5f5'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#bdbdbd'
      }
    ]
  },
  {
    'featureType': 'administrative.neighborhood',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#eeeeee'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#e5e5e5'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9e9e9e'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#ffffff'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dadada'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#616161'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9e9e9e'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#e5e5e5'
      }
    ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#eeeeee'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#c9c9c9'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9e9e9e'
      }
    ]
  }
]

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
