import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { MKSlider } from 'react-native-material-kit'
import math from 'mathjs'
import { ValueText } from './ValueText'

class SliderWithValue extends Component {
  render() {
    const { min, max, value, width, unit, label, places } = this.props
    return (
      <View style={styles.containerStl}>
        <Text>{label}</Text>
        <View style={styles.valuesStl}>
          <MKSlider
            ref='slider'
            min={min}
            max={max}
            value={value}
            style={[{ width: width || 200 }]}
            onChange={this.props.onChange}
          />
          <ValueText
            ref='valueText'
            value={math.round(value, places)}
            unit={unit}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  containerStl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  valuesStl: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { SliderWithValue }
