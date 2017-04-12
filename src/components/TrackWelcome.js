import React, { Component } from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { gql, graphql } from 'react-apollo'
import { Spinner, TrackResult } from './common'

class TrackWelcome extends Component {
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
        <View tabLabel="Nouveautés">
          {categories[0].tracks.map((track) => {
            return (
              <TrackResult
                key={track.id}
                title={track.title}
                distance={track.distance}
                place={track.place}
                date="03/2017"
                description={
                 (track.description.length > 40)
                 ? (track.description.substring(0, 40) + '...')
                 : track.description
                }
                done
              />
            )
          })}
        </View>
        <View tabLabel="Populaires">
          {categories[0].tracks.map((track) => {
            return (
              <TrackResult
                key={track.id}
                title={track.title}
                distance={track.distance}
                place={track.place}
                date="03/2017"
                description={
                 (track.description.length > 40)
                 ? (track.description.substring(0, 40) + '...')
                 : track.description
                }
                done
              />
            )
          })}
        </View>
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

const tracksQuery = gql`
  query categoriesQuery($id: Int!) {
    categories(id: $id) {
      tracks {
        id
        title
        distance
        description
        place
      }
    }
  }
`

const mapStateToProps = (state) => {
  return {
    currentCategory: state.global.category
  }
}

export default connect(
  mapStateToProps,
  null
)(graphql(tracksQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.currentCategory
    }
  })
})(TrackWelcome))
