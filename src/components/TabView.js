import React, { PropTypes, Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions'
import { Spinner } from './common'
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
  renderUserMail() {
    const { user, loading } = this.props
    if (loading === true) {
      return <Spinner style={styles.subtitleEmailTextStl} size='small' />
    }
    if (user === null) {
      return <Text style={styles.subtitleEmailTextStl} />
    }
    return <Text style={styles.subtitleEmailTextStl}>{user.email}</Text>
  }

  render() {
    return (
      <View style={styles.containerStl}>
        <View style={styles.headerContainerStl}>
          <View style={styles.logoSubtitleContainerStl}>
            <View style={styles.logoContainerStl}>
              <Image source={require('../img/logo.png')} />
            </View>
            <View style={styles.subtitleContainerStl}>
              <Text style={styles.subtitleTextStl}>MyFitWay</Text>
              {this.renderUserMail()}
            </View>
          </View>
        </View>

        <View style={styles.menuContainerStl}>
          <Section>
            <Link title="Tracks" icon="swap-calls" onPress={() => Actions.tracks()} close />
            <Link title="Tracer" icon="layers" onPress={() => Actions.tracer({ type: 'refresh' })} close />
          </Section>
          <Section>
            <Link title="Paramètres" icon="settings" onPress={() => console.log('parameters')} close />
            <Link title="Déconnexion" icon="cancel" onPress={() => this.props.logoutUser()} />
          </Section>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStl: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  headerContainerStl: {
    flexDirection: 'column',
    elevation: 2,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    backgroundColor: '#00AA8D',
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
    marginRight: 32,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  subtitleTextStl: {
    fontSize: 22,
    color: '#000',
    opacity: 0.87,
    alignSelf: 'center'
  },
  subtitleEmailTextStl: {
    fontSize: 14,
    color: '#000',
    opacity: 0.54,
    alignSelf: 'center'
  },
  menuContainerStl: {
    backgroundColor: '#FAFAFA',
    flex: 1
  }
}

TabView.contextTypes = contextTypes
TabView.propTypes = propTypes

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(TabView)
