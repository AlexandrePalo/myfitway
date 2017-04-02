import React, { Component } from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { Spinner } from '../common'
import WelcomeList from '../WelcomeList'

class WelcomeTrackList extends Component {
  render() {
    const { tabBarTextStyle } = styles
    const { categories, loading } = this.props.data
    if (loading || !categories) {
      return (
        <Spinner size="large" />
      )
    }
    return (
      <ScrollableTabView
        style={{ paddingTop: 55 }}
        tabBarTextStyle={tabBarTextStyle}
        tabBarBackgroundColor="#F5F5F5"
      >
        { categories.map((category) => (
          <WelcomeList
            tabLabel={category.name}
            category={category.code}
            key={category.code}
          />
          )
        )}
      </ScrollableTabView>
    )
  }
}

const styles = {
  tabBarTextStyle: {
    color: '#000000',
    opacity: 0.87
  }
}

export default WelcomeTrackList
