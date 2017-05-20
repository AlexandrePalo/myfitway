import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'

const DrawerLink = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.containerStl} onPress={onPress}>
      <MaterialIcons name={icon} size={20} style={styles.iconStl} />
      <Text style={styles.titleStl}>{title}</Text>
    </TouchableOpacity>
  )
}

export { DrawerLink }
