import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { TrackResult, Spinner } from './index'

class TrackWelcomeFamousTracksUnlinked extends Component {
  render() {
    if (this.props.data.loading || !this.props.data.famousTracks) {
      return (
        <Spinner size="large" />
      )
    }
    if (this.props.data.famousTracks.length === 0) {
      return (
        <View style={styles.messageContainerStl}>
          <Text style={styles.messageStl}>
            Il n'y a pas de tracés GPS disponibles pour ce sport !
            Je t'invite à en ajouter et prendre part à la communauté !
          </Text>
        </View>
      )
    }
    return (
      <ScrollView>
        {this.props.data.famousTracks.map((track) => {
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
      </ScrollView>
    )
  }
}

const styles = {
  messageContainerStl: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16
  },
  messageStl: {
    fontSize: 20,
    color: '#000',
    opacity: 0.38,
    fontStyle: 'italic'
  }
}

const famousTracksQuery = gql`
  query famousTracks($categoryId: Int!) {
    famousTracks(categoryId: $categoryId) {
      id
      title
      distance
      description
      place
      addTimestamp
    }
  }
`

const mapStateToProps = (state) => {
  return {
    currentCategory: state.global.category
  }
}

const TrackWelcomeFamousTracks = connect(
  mapStateToProps,
  null
)(graphql(famousTracksQuery, {
  options: (ownProps) => ({
    variables: {
      categoryId: ownProps.currentCategory
    }
  })
})(TrackWelcomeFamousTracksUnlinked))

export { TrackWelcomeFamousTracks }
