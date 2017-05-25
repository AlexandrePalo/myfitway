import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { DrawerSection, DrawerLink } from '../../components'
import { styles } from './styles'
import { addOneSec } from '../../actions'

class DrawerUnlinked extends Component {
  componentDidUpdate() {
    if (this.props.timerOn) {
      if (!this.timer) {
        this.timer = setInterval(this.timerCallback.bind(this), 1000)
      }
    } else if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  timerCallback() {
    this.props.addOneSec()
  }

  render() {
    return (
      <View style={styles.containerStl}>
        <View style={styles.headerContainerStl}>
          <View style={styles.logoSubtitleContainerStl}>
            <View style={styles.logoContainerStl}>
              <Entypo name="sports-club" color="#fff" size={80} />
            </View>
            <View style={styles.subtitleContainerStl}>
              <Text style={styles.subtitleTextStl}>MyFitWay</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuContainerStl}>
          <DrawerSection>
            <DrawerLink title="Derniers tracés" icon="swap-calls" onPress={() => this.props.navigation.navigate('tracks')} />
            <DrawerLink title="Suivi de parcours" icon="layers" onPress={() => this.props.navigation.navigate('tracer')} />
          </DrawerSection>
          <DrawerSection>
            <DrawerLink title="Paramètres" icon="settings" onPress={() => console.log('parameters')} />
            <DrawerLink title="Déconnexion" icon="cancel" onPress={() => console.log('deconnexion')} />
          </DrawerSection>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  timerOn: state.tracer.timerOn
})

const Drawer = connect(mapStateToProps, { addOneSec })(DrawerUnlinked)

export { Drawer }
