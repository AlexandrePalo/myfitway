import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Picker } from 'react-native'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'
import { Card, MButtonRaised, RecordingMap } from '../../components'
import { styles } from './styles'
import { startTimer, stopTimer, resetTimer } from '../../actions'

class TracerMapUnlinked extends Component {
  state = {
    mapType: 'standard'
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
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerStl}>
          <RecordingMap mapType={this.state.mapType} onRef={ref => (this.map = ref)} />
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
        <View style={styles.bottomMenuContainerStl}>
          <View style={styles.bottomMenuIconCStlSpecial}>
            <MaterialIcons name="layers" size={20} style={styles.bottomMenuIconStl} />
            <Picker selectedValue={this.state.mapType} style={{ flex: 1, color: '#000', opacity: 0.54 }} onValueChange={mapType => this.setState({ mapType })}>
              <Picker.Item label="Google Maps" value="standard" />
              <Picker.Item label="Satellite" value="satellite" />
              <Picker.Item label="Hybride" value="hybrid" />
              <Picker.Item label="OpenStreetMap" value="openstreetmap" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.bottomMenuIconCStl} onPress={() => this.map.animateToCurrentPosition()}>
            <MaterialIcons name="gps-fixed" size={20} style={styles.bottomMenuIconStl} />
          </TouchableOpacity>
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
