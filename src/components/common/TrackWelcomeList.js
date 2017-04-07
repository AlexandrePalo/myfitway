import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { TrackSection, TrackResult, Spinner } from './index'

class TrackWelcomeListUnlinked extends Component {
  renderNew() {
    if (this.props.data.loading) {
      return (
        <Spinner size="large" />
      )
    }
    return this.props.data.categories[0].tracks.map((track) => (
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
    ))
  }

  renderFamous() {
    if (this.props.data.loading) {
      return (
        <Spinner size="large" />
      )
    }
    return this.props.data.categories[0].tracks.map((track) => (
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
    ))
  }

  render() {
    return (
      <ScrollView>
        <TrackSection iconName="new-releases" title="Nouveaux parcours">
          {this.renderNew()}
        </TrackSection>
        <TrackSection iconName="star" title="Parcours populaires">
          {this.renderFamous()}
        </TrackSection>
      </ScrollView>
    )
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

const TrackWelcomeList = connect(
  null,
  null
)(graphql(tracksQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.categoryId
    }
  })
})(TrackWelcomeListUnlinked))

export { TrackWelcomeList }
