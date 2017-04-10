import React, { PropTypes } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { MButtonRaised } from './common'

const contextTypes = {
  drawer: React.PropTypes.object,
}

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
})

const TabView = (props, context) => {
  const drawer = context.drawer
  return (
    <View style={[styles.container, props.sceneStyle]}>
      <MButtonRaised onPress={() => { drawer.close(); Actions.tracks() }}>Tracks</MButtonRaised>
      <MButtonRaised onPress={() => { drawer.close(); Actions.tracer() }}>Tracer</MButtonRaised>
    </View>
  )
}

TabView.contextTypes = contextTypes
TabView.propTypes = propTypes

export default TabView
