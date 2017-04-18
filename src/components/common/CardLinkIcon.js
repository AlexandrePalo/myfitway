import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CardLinkIcon = (props) => {
  const { icon, text, set, onPress, last } = props
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
      borderBottomWidth: last ? 0 : 1,
      borderBottomColor: '#eeeeee',
      flex: 1,
      paddingBottom: 16,
      paddingTop: 16
    },
    textStl: {
      color: '#000',
      opacity: set ? 0.87 : 0.54,
      fontSize: 12
    },
    iconStl: {
      color: set ? '#8bc34a' : '#000',
      opacity: set ? 1 : 0.54
    }
  }
  const { containerStl, iconCStl, textCStl, textStl, iconStl } = styles
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



export { CardLinkIcon }
