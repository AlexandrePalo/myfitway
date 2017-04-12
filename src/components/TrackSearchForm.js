import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import TextField from 'react-native-md-textinput'
import { Actions } from 'react-native-router-flux'
import { MCard } from './common/MCard'
import { MButtonRaised } from './common/MButtonRaised'
import { SliderWithTwoValues } from './common/SliderWithTwoValues'
import {
  searchTextChanged,
  distanceMinChanged, distanceMaxChanged,
  durationMinChanged, durationMaxChanged
} from '../redux/actions'

class TrackSearchForm extends Component {
  onButtonPress() {
    Actions.searchResults()
  }

  render() {
    return (
      <View style={styles.containerStl}>
        <MCard>
          <TextField
            inputStyle={{ height: 40, lineHeight: 40, marginTop: 0 }}
            label="Recherche"
            value={this.props.textSearch}
            onChangeText={text => this.props.searchTextChanged(text)}
          />
          <SliderWithTwoValues
            label="Distance"
            min={0}
            max={100}
            minValue={this.props.distanceMin}
            maxValue={this.props.distanceMax}
            unit="km"
            places={0}
            onChange={val => {
              this.props.distanceMinChanged(val.min)
              this.props.distanceMaxChanged(val.max)
            }}
          />
          <SliderWithTwoValues
            label="Durée"
            min={0}
            max={300}
            minValue={this.props.durationMin}
            maxValue={this.props.durationMax}
            unit="min"
            places={0}
            onChange={val => {
              this.props.durationMinChanged(val.min)
              this.props.durationMaxChanged(val.max)
            }}
          />
          <View style={styles.buttonWrapper}>
            <MButtonRaised onPress={this.onButtonPress.bind(this)}>
              <Text>Rechercher</Text>
            </MButtonRaised>
          </View>
        </MCard>
      </View>
    )
  }
}

const styles = {
  containerStl: {
    paddingTop: 65,
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  buttonWrapper: {
    marginTop: 30,
    marginBottom: 10
  }
}

const mapStateToProps = (state) => ({
  textSearch: state.trackSearch.textSearch,
  distanceMin: state.trackSearch.distanceMin,
  distanceMax: state.trackSearch.distanceMax,
  durationMin: state.trackSearch.durationMin,
  durationMax: state.trackSearch.durationMax
})

export default connect(
  mapStateToProps,
  { searchTextChanged,
    distanceMinChanged,
    distanceMaxChanged,
    durationMinChanged,
    durationMaxChanged }
)(TrackSearchForm)
