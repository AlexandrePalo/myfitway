import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const contextTypes = {
  drawer: React.PropTypes.object,
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

const styles = {
  containerStl: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconStl: {
    color: '#000',
    opacity: 0.54,
    marginLeft: 16,
    paddingRight: 20
  },
  titleStl: {
    color: '#000',
    opacity: 0.87,
    marginLeft: 16
  }
}

export { Link }
