import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const contextTypes = {
  drawer: React.PropTypes.object,
}

const TBSideMenuButton = (props, context) => {
  const drawer = context.drawer
  return (
    <TouchableOpacity
      onPress={() => {
        drawer.open()
      }}
    >
      <Icon
        name='menu'
        size={24}
      />
    </TouchableOpacity>
  )
}

TBSideMenuButton.contextTypes = contextTypes

export { TBSideMenuButton }
