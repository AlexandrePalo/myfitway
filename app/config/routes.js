import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import { Login, ResetPassword, NewMember, LastTracks, TrackDetails, TracerMap } from '../routes'
import { LoggedOut, LoggedIn, Drawer } from '../layouts'
import { styles } from './styles'

const LoggedOutNavigator = StackNavigator({
  login: { screen: Login, navigationOptions: { title: 'Login' } },
  resetPassword: { screen: ResetPassword, navigationOptions: { title: 'Réinitialiser mon mot de passe' } },
  newMember: { screen: NewMember, navigationOptions: { title: 'Créer un nouveau compte' } }
})

const TracksNavigator = StackNavigator({
  lastTracks: {
    screen: LastTracks,
    navigationOptions: ({ navigation }) => ({
      title: 'Derniers tracés',
      headerLeft: (
        <TouchableOpacity style={styles.headerLeftStl} onPress={() => navigation.navigate('DrawerOpen')}>
          <MaterialIcons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      )
    })
  },
  trackDetails: {
    screen: TrackDetails,
    navigationOptions: ({ navigation }) => ({ title: navigation.state.params.name })
  }
})

const TracerNavigator = StackNavigator({
  tracerMap: {
    screen: TracerMap,
    navigationOptions: ({ navigation }) => ({
      title: 'Enregistrement',
      headerLeft: (
        <TouchableOpacity style={styles.headerLeftStl} onPress={() => navigation.navigate('DrawerOpen')}>
          <MaterialIcons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      )
    })
  }
})

const LoggedInNavigator = DrawerNavigator(
  {
    tracks: { screen: TracksNavigator },
    tracer: { screen: TracerNavigator }
  },
  {
    initialRouteName: 'tracer',
    drawerPosition: 'left',
    contentComponent: props => <Drawer {...props} />
  }
)

class Router extends Component {
  render() {
    const user = true

    if (user) {
      return (
        <LoggedIn>
          <LoggedInNavigator />
        </LoggedIn>
      )
    }
    return (
      <LoggedOut>
        <LoggedOutNavigator />
      </LoggedOut>
    )
  }
}

export default Router
