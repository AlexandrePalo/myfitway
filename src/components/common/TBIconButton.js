import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TBIconButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress()
      }}
    >
      <Icon
        name={icon}
        size={24}
        style={{ color: '#fff' }}
      />
    </TouchableOpacity>
  )
}

export { TBIconButton }
