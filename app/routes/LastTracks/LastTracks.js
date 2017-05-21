import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
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
        {this.props.data.allTracks.map(track => {
          return (
            <TouchableOpacity key={track.id} onPress={() => this.props.navigation.navigate('trackDetails', { id: track.id, name: track.name })}>
              <TrackListItem key={track.id} title={track.name} distance={track.distance} place={track.place} date={moment(track.createdAt).format('DD/MM/YYYY')} description={track.description.length > 20 ? track.description.substring(0, 40) + '...' : track.description} />
            </TouchableOpacity>
          )
        })}
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
