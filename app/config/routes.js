import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Login } from '../routes'
import { LoggedOut } from '../layouts'

const LoggedOutNavigator = StackNavigator({
  login: { screen: Login }
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
