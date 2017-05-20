import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

class LoggedOut extends Component {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}

export { LoggedOut }
