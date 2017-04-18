import React, { Component } from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { TrackWelcomeNewTracks, TrackWelcomeFamousTracks } from './common'

class TrackWelcome extends Component {
  render() {
    const { tabBarTextStyle } = styles
    return (
      <ScrollableTabView
        style={{ paddingTop: 55 }}
        tabBarTextStyle={tabBarTextStyle}
        tabBarBackgroundColor="#F5F5F5"
      >
        <TrackWelcomeNewTracks tabLabel="Nouveautés" />
        <TrackWelcomeFamousTracks tabLabel="Populaires" />
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

export default TrackWelcome
