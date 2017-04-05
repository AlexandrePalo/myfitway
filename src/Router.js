import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import WelcomeTrackList from './components/containers/WelcomeTrackList'
import TrackSearchForm from './components/TrackSearchForm'
import TrackSearchResult from './components/TrackSearchResult'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Authentification" initial/>
      </Scene>
      <Scene key="tracks">
        <Scene
          key="welcometracklist"
          component={WelcomeTrackList}
          title="Parcours"
          rightTitle="Recherche"
          onRight={() => Actions.searchform()}
        />
        <Scene key="searchform" component={TrackSearchForm} title="Recherche" />
        <Scene
          key="searchresults"
          component={TrackSearchResult}
          title="Résultats"
          rightTitle="Accueil"
          onRight={() => Actions.welcometracklist()}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
