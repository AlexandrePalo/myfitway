import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  const { title } = props
  const { containerStl, titleStl, leftContainerStl, rightContainerStl, menuContainerStl,
          titleContainerStl } = styles
  return (
    <View style={containerStl}>
      <View style={leftContainerStl}>
        <View style={menuContainerStl}>
          <Text>Menu</Text>
        </View>
        <View style={titleContainerStl}>
          <Text style={titleStl}>{title}</Text>
        </View>
      </View>
      <View style={rightContainerStl}>
        <Text>Recherche</Text>
      </View>
    </View>
  )
}

const styles = {
  containerStl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 56,
    backgroundColor: '#F5F5F5'
  },
  titleStl: {
    fontSize: 20,
    color: '#000000',
    opacity: 0.87
  },
  leftContainerStl: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightContainerStl: {
    alignItems: 'center',
    opacity: 0.38
  },
  menuContainerStl: {
    opacity: 0.38
  },
  titleContainerStl: {
    marginLeft: 30
  }
}

export { Header }
