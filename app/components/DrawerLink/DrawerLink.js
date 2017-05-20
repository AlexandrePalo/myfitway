import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { styles } from './styles'

const contextTypes = {
  drawer: React.PropTypes.object
}

const Link = ({ title, icon, onPress, close }, context) => {
  const drawer = context.drawer
  return (
    <TouchableOpacity
      style={styles.containerStl}
      onPress={() => {
        if (close) {
          drawer.close()
        }
        onPress()
      }}
    >
      <Icon name={icon} size={20} style={styles.iconStl} />
      <Text style={styles.titleStl}>{title}</Text>
    </TouchableOpacity>
  )
}

Link.contextTypes = contextTypes

export { Link }
