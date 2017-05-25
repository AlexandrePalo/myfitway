import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Location, Permissions, MapView } from 'expo'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'
import { Spinner, Card, MButtonRaised } from '../../components'
import { styles } from './styles'
import { startTimer, stopTimer, resetTimer } from '../../actions'

class TracerMapUnlinked extends Component {
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

  renderTimerButton() {
    if (this.props.timerOn) {
      return (
        <View style={styles.buttonsWrapper}>
          <View style={{ flex: 1 }}>
            <MButtonRaised onPress={() => this.props.stopTimer()}>
              Stop
            </MButtonRaised>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.buttonsWrapper}>
        <View style={styles.flex2BtnL}>
          <MButtonRaised onPress={() => this.props.startTimer()}>
            Start
          </MButtonRaised>
        </View>
        <View style={styles.flex2BtnR}>
          <MButtonRaised onPress={() => this.props.resetTimer()}>
            Reset
          </MButtonRaised>
        </View>
      </View>
    )
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
      <View style={{ flex: 1 }}>
        <View style={styles.containerStl}>
          <MapView
            initialRegion={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            style={styles.mapStl}
          />
        </View>
        <View style={styles.containerCardStl}>
          <Card>
            <View style={styles.containerInfoStl}>
              <Text style={styles.titleStl}>{this.props.timer} s</Text>
              <View style={styles.disPlaceContainerStl}>
                <View style={styles.infoWrapperStl}>
                  <MaterialIcons name="all-inclusive" size={20} color="#000" style={styles.infoIconStl} />
                  <Text style={styles.subTitleStl}>10 km</Text>
                </View>
              </View>
              <View style={styles.stepContainerStl}>
                <View style={styles.infoWrapperStl}>
                  <MaterialIcons name="trending-up" size={20} color="#000" style={styles.infoIconStl} />
                  <Text style={styles.subTitleStl}>1000 m</Text>
                </View>
                <View style={styles.infoWrapperStl}>
                  <MaterialIcons name="trending-down" size={20} color="#000" style={styles.infoIconStl} />
                  <Text style={styles.subTitleStl}>1000 m</Text>
                </View>
              </View>
            </View>
            {this.renderTimerButton()}
          </Card>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  timerOn: state.tracer.timerOn,
  timer: state.tracer.timer
})

const TracerMap = connect(mapStateToProps, { startTimer, stopTimer, resetTimer })(TracerMapUnlinked)

export { TracerMap }
