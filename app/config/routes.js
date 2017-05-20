import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Login, ResetPassword, NewMember } from '../routes'
import { LoggedOut } from '../layouts'

const LoggedOutNavigator = StackNavigator({
  login: { screen: Login, navigationOptions: { title: 'Login' } },
  resetPassword: { screen: ResetPassword, navigationOptions: { title: 'Réinitialiser mon mot de passe' } },
  newMember: { screen: NewMember, navigationOptions: { title: 'Créer un nouveau compte' } }
})

class Router extends Component {
  render() {
    return (
      <LoggedOut>
        <LoggedOutNavigator />
      </LoggedOut>
    )
  }
}

export default Router
