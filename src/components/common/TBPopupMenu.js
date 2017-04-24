import React, { Component } from 'react'
import { View } from 'react-native'
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import { TBIconButton } from './'

class TBPopupMenu extends Component {
  state = {
    opened: false
  }

  onBackdropPress() {
    this.setState({ opened: false })
  }

  render() {
    return (
      <View>
        <TBIconButton icon={this.props.icon} onPress={() => this.setState({ opened: true })} />
        <Menu
          opened={this.state.opened}
          onBackdropPress={() => this.onBackdropPress()}
          onSelect={this.props.onSelect}
        >
          <MenuTrigger />
          <MenuOptions>
            {this.props.children}
          </MenuOptions>
        </Menu>
      </View>
    )
  }
}

export { TBPopupMenu }
