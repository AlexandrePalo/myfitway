import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

class Map extends Component {
  render() {
    const { region } = this.props
    console.log(region)

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    )
  }
}

export default Map
