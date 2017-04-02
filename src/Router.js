import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import WelcomeTrackList from './components/containers/WelcomeTrackList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Authentification" initial />
      </Scene>
      <Scene key="tracks">
        <Scene
          key="welcometracklist"
          component={WelcomeTrackList}
          title="Parcours"
          rightTitle="Recherche"
          onRight={() => console.log('right!')}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
