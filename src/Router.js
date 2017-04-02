import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import WelcomeTrackList from './components/containers/WelcomeTrackList'
import TrackSearchForm from './components/TrackSearchForm'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Authentification" />
      </Scene>
      <Scene key="tracks" initial>
        <Scene
          key="welcometracklist"
          component={WelcomeTrackList}
          title="Parcours"
          rightTitle="Recherche"
          onRight={() => Actions.searchform()}
        />
        <Scene key="searchform" component={TrackSearchForm} title="Recherche" />
      </Scene>
    </Router>
  )
}

export default RouterComponent
