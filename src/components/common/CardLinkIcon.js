import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CardLinkIcon = (props) => {
  const { icon, text, set, onPress } = props
  const { containerStl, iconCStl, textCStl, iconStl } = styles
  const textStl = {
      color: '#000',
      opacity: set ? 0.87 : 0.54,
      fontSize: 12
    }
  return (
    <TouchableOpacity style={containerStl} onPress={onPress}>
      <View style={iconCStl}>
        <Icon name={icon} size={20} style={iconStl} />
      </View>
      <View style={textCStl}>
        <Text style={textStl}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  containerStl: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconCStl: {
    marginRight: 16
  },
  textCStl: {
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    flex: 1,
    paddingBottom: 16,
    paddingTop: 16
  },
  iconStl: {
    color: '#8bc34a'
  }
}

export { CardLinkIcon }
