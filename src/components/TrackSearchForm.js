import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import TextField from 'react-native-md-textinput'
import { MCard } from './common/MCard'
import { SliderWithTwoValues } from './common/SliderWithTwoValues'
import { searchTextChanged, distanceMinChanged, distanceMaxChanged } from '../redux/actions'

class TrackSearchForm extends Component {
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
}

const mapStateToProps = (state) => ({
  textSearch: state.trackSearch.textSearch,
  distanceMin: state.trackSearch.distanceMin,
  distanceMax: state.trackSearch.distanceMax
})

export default connect(
  mapStateToProps,
  { searchTextChanged, distanceMinChanged, distanceMaxChanged }
)(TrackSearchForm)
