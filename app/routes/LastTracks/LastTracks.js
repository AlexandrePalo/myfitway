import React, { Component } from 'react'
import { View } from 'react-native'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { TrackListItem, Spinner } from '../../components'

class LastTracksUnlinked extends Component {
  render() {
    console.log(this.props.data.allTracks)
    if (this.props.data.loading) {
      return (
        <View>
          <Spinner size="large" />
        </View>
      )
    }
    return (
      <View>
        {this.props.data.allTracks.map(track => <TrackListItem key={track.id} title={track.name} distance={track.distance} place="Metz 57" date="01/01/2017" description={track.description.length > 20 ? track.description.substring(0, 40) + '...' : track.description} />)}
      </View>
    )
  }
}

const allTracksQuery = gql`
  query {
    allTracks {
      id
      name
      description
      duration
      stepN
      stepP
      distance
    }
  }
`

const LastTracks = connect(null, null)(graphql(allTracksQuery)(LastTracksUnlinked))

export { LastTracks }
