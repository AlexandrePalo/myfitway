import React, { Component } from 'react'
import { View } from 'react-native'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import moment from 'moment'
import { TrackListItem, Spinner } from '../../components'
import { styles } from './styles'

class LastTracksUnlinked extends Component {
  render() {
    if (this.props.data.loading) {
      return (
        <View style={styles.spinnerStl}>
          <Spinner size="large" />
        </View>
      )
    }
    return (
      <View>
        {this.props.data.allTracks.map(track => <TrackListItem key={track.id} title={track.name} distance={track.distance} place={track.place} date={moment(track.createdAt).format('DD/MM/YYYY')} description={track.description.length > 20 ? track.description.substring(0, 40) + '...' : track.description} />)}
      </View>
    )
  }
}

const allTracksQuery = gql`
  query {
    allTracks(orderBy: createdAt_DESC) {
      id
      name
      description
      duration
      stepN
      stepP
      distance
      createdAt
      place
    }
  }
`

const LastTracks = connect(null, null)(graphql(allTracksQuery)(LastTracksUnlinked))

export { LastTracks }
