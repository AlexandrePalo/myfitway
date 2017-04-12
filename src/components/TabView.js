import React, { PropTypes, Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Link, Section, CurrentCategoryPicker } from './sideMenu'

const contextTypes = {
  drawer: React.PropTypes.object,
}

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
}

class TabView extends Component {
  render() {
    const drawer = this.context.drawer
    return (
      <View style={styles.containerStl}>
        <View style={styles.headerContainerStl}>
          <View style={styles.logoSubtitleContainerStl}>
            <View style={styles.logoContainerStl}>
              <Image source={require('../img/logo.png')} />
            </View>
            <View style={styles.subtitleContainerStl}>
              <Text style={styles.subtitleTextStl}>MyFitWay</Text>
            </View>
          </View>
          <View style={styles.pickerContainerStl}>
            <Text style={styles.pickerTextStl}>Sport :</Text>
            <View style={styles.pickerStl}>
              <CurrentCategoryPicker />
            </View>
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
}

const styles = {
  containerStl: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  headerContainerStl: {
    flexDirection: 'column',
    borderBottomColor: '#757575',
    borderBottomWidth: 1
  },
  logoSubtitleContainerStl: {
    marginTop: 16,
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoContainerStl: {
  },
  subtitleContainerStl: {
    alignSelf: 'center',
    marginRight: 32
  },
  subtitleTextStl: {
    fontSize: 22,
    color: '#000',
    opacity: 0.87,
    alignSelf: 'center'
  },
  pickerContainerStl: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16
  },
  pickerTextStl: {
    color: '#000',
    opacity: 0.87,
    fontSize: 16,
    flex: 1
  },
  pickerStl: {
    flex: 1
  },
  menuContainerStl: {
    marginTop: 3
  }
}

TabView.contextTypes = contextTypes
TabView.propTypes = propTypes

export default TabView
