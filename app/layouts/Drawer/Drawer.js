import React from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { DrawerSection, DrawerLink } from '../../components'
import { styles } from './styles'

const Drawer = props => (
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
        <DrawerLink title="Derniers tracés" icon="swap-calls" onPress={() => props.navigation.navigate('tracks')} />
        <DrawerLink title="Tracer" icon="layers" onPress={() => console.log('tracer')} />
      </DrawerSection>
      <DrawerSection>
        <DrawerLink title="Paramètres" icon="settings" onPress={() => console.log('parameters')} />
        <DrawerLink title="Déconnexion" icon="cancel" onPress={() => console.log('deconnexion')} />
      </DrawerSection>
    </View>
  </View>
)

export { Drawer }
