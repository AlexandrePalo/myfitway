import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import TrackWelcome from './components/TrackWelcome'
import TrackSearchForm from './components/TrackSearchForm'
import TrackSearchResult from './components/TrackSearchResult'
import tracerWelcome from './components/tracerWelcome'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Authentification" />
      </Scene>
      <Scene key="tracks">
        <Scene
          key="welcometrack"
          component={TrackWelcome}
          title="Parcours"
          rightTitle="Recherche"
          onRight={() => Actions.searchForm()}
        />
        <Scene key="searchForm" component={TrackSearchForm} title="Recherche" />
        <Scene
          key="searchResults"
          component={TrackSearchResult}
          title="Résultats"
          rightTitle="Accueil"
          onRight={() => Actions.welcometrack()}
        />
      </Scene>
      <Scene key="tracer" initial>
        <Scene
          key="welcome"
          component={tracerWelcome}
          title="Suivi GPS"
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
