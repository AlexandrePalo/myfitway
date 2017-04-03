import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { MKRangeSlider } from 'react-native-material-kit'
import math from 'mathjs'
import { ValueText } from './ValueText'

class SliderWithTwoValues extends Component {
  concatValues() {
    const { minValue, maxValue, places } = this.props
    return math.round(minValue, places) + ' - ' + math.round(maxValue, places)
  }
  render() {
    const { min, max, minValue, maxValue, width, unit, label } = this.props
    return (
      <View style={styles.containerStl}>
        <Text>{label}</Text>
        <View style={styles.valuesStl}>
          <MKRangeSlider
            ref='slider'
            min={min}
            max={max}
            minValue={minValue}
            maxValue={maxValue}
            style={[{ width: width || 200 }]}
            onChange={this.props.onChange}
          />
          <ValueText
            style={styles.textStl}
            ref='valueText'
            value={this.concatValues()}
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
  },
  textStl: {
    fontSize: 12
  }
}

export { SliderWithTwoValues }
