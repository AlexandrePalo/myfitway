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
import TracerWelcome from './components/TracerWelcome'
import RecordingSettings from './components/RecordingSettings'
import NavigationDrawer from './components/NavigationDrawer'
import TracerFinalize from './components/TracerFinalize'
import { TBSideMenuButton, TBIconButton } from './components/common'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Authentification" />
        <Scene key="signIn" component={SignInForm} title="Nouveau compte" />
        <Scene key="resetPassword" component={ResetPasswordForm} title="Mot de passe oublié" />
      </Scene>

      <Scene key='drawer' component={NavigationDrawer} open={false} initial>
        <Scene key="main">
          <Scene
            key="tracks"
            renderLeftButton={() => <TBSideMenuButton />}
            navigationBarStyle={{ backgroundColor: '#00AA8D' }}
            titleStyle={{ color: '#fff', fontSize: 16 }}
            barButtonTextStyle={{ color: '#fff' }}
            barButtonIconStyle={{ tintColor: '#fff' }}
            backButtonTextStyle={{ color: '#fff' }}
          >
            <Scene
              key="welcometrack"
              component={TrackWelcome}
              title="Parcours"
              rightTitle="Recherche"
              renderRightButton={() => <TBIconButton icon="search" onPress={() => Actions.searchForm()} />}
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
          <Scene
            key="tracer"
            navigationBarStyle={{ backgroundColor: '#00AA8D' }}
            titleStyle={{ color: '#fff', fontSize: 16 }}
            barButtonTextStyle={{ color: '#fff' }}
            barButtonIconStyle={{ tintColor: '#fff' }}
            backButtonTextStyle={{ color: '#fff' }}
          >
            <Scene
              key="welcome"
              component={TracerWelcome}
              title="Suivi GPS"
              renderLeftButton={() => <TBSideMenuButton />}
              renderRightButton={() => <TBIconButton icon='settings' onPress={() => Actions.recordingSettings()} />}
            />
            <Scene
              key="recordingSettings"
              component={RecordingSettings}
              title="Réglages de la carte"
              renderRightButton={() => <TBIconButton icon='done' onPress={() => Actions.welcome({ type: 'reset' })} />}
            />
            <Scene
              key="finalize"
              component={TracerFinalize}
              title="Finalisation"
              renderLeftButton={() => <TBSideMenuButton />}
            />
          </Scene>
        </Scene>
      </Scene>

    </Router>
  )
}

export default RouterComponent
