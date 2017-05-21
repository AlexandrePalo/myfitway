import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Location, Permissions, MapView } from 'expo'
import { styles } from './styles'

class TracerMap extends Component {
  state = {
    errorMessage: null,
    location: null
  }

  componentWillMount() {
    this.getLocationAsync()
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

  render() {
    if (this.state.errorMessage) {
      return (
        <View style={styles.containerStl}>
          <Text>{this.state.errorMessage}</Text>
        </View>
      )
    }
    return (
      <View style={styles.containerStl}>
        <MapView style={styles.mapStl} />
      </View>
    )
  }
}

export { TracerMap }
