import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LoginForm from './components/LoginForm'
import SignInForm from './components/SignInForm'
import ResetPasswordForm from './components/ResetPasswordForm'
import TrackWelcome from './components/TrackWelcome'
import TrackSearchForm from './components/TrackSearchForm'
import TrackSearchResult from './components/TrackSearchResult'
import tracerWelcome from './components/tracerWelcome'
import NavigationDrawer from './components/NavigationDrawer'
import { TBSideMenuButton, TBIconButton } from './components/common'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" initial>
        <Scene key="login" component={LoginForm} title="Authentification" />
        <Scene key="signIn" component={SignInForm} title="Nouveau compte" />
        <Scene key="resetPassword" component={ResetPasswordForm} title="Mot de passe oublié" />
      </Scene>

      <Scene key='drawer' component={NavigationDrawer} open={false}>
        <Scene key="main">
          <Scene key="tracks" renderLeftButton={() => <TBSideMenuButton />}>
            <Scene
              key="welcometrack"
              component={TrackWelcome}
              title="Parcours"
              rightTitle="Recherche"
              renderRightButton={() => (
                <TouchableOpacity
                  onPress={() => {
                    Actions.searchForm()
                  }}
                >
                  <Icon
                    name='search'
                    size={24}
                  />
                </TouchableOpacity>
              )}
              renderLeftButton={() => <TBSideMenuButton />}
            />
            <Scene key="searchForm" component={TrackSearchForm} title="Recherche" />
            <Scene
              key="searchResults"
              component={TrackSearchResult}
              title="Résultats"
              rightTitle="Accueil"
              renderRightButton={() => <TBIconButton icon='home' onPress={() => Actions.welcometrack({ type: 'reset' })} /> }
            />
          </Scene>
          <Scene key="tracer">
            <Scene
              key="welcome"
              component={tracerWelcome}
              title="Suivi GPS"
              renderLeftButton={() => <TBSideMenuButton />}
            />
          </Scene>
        </Scene>
      </Scene>

    </Router>
  )
}

export default RouterComponent
