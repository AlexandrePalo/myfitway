import React, { PropTypes } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { MButtonRaised } from './common'
import { Link, Section } from './sideMenu'

const contextTypes = {
  drawer: React.PropTypes.object,
}

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
}

const TabView = (props, context) => {
  const drawer = context.drawer
  return (
    <View style={styles.containerStl}>
      <View style={styles.headerContainerStl}>
        <View style={styles.logoContainerStl}>
          <Text>logo</Text>
        </View>
        <View style={styles.subtitleContainerStl}>
          <Text style={styles.subtitleTextStl}>subtitle</Text>
        </View>
      </View>

      <View style={styles.menuContainerStl}>
        <Section>
          <Link title="Tracks" icon="swap-calls" to={() => Actions.tracks()} />
          <Link title="Tracer" icon="layers" to={() => Actions.tracer()} />
        </Section>
        <Section>
          <Link title="Paramètres" icon="settings" to={() => console.log('parameters')} />
          <Link title="Déconnexion" icon="cancel" to={() => console.log('logout')} />
        </Section>
      </View>

</View>
  )
}

const styles = {
  containerStl: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  headerContainerStl: {
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  logoContainerStl: {
    height: 60,
  },
  subtitleContainerStl: {
    height: 56,
  },
  subtitleTextStl: {
    color: '#000',
    opacity: 0.54
  },
  menuContainerStl: {
    marginTop: 3
  }
}

TabView.contextTypes = contextTypes
TabView.propTypes = propTypes

export default TabView
