import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
import moment from 'moment'
import { Card, Spinner } from '../../components'

class TrackDetailsUnlinked extends Component {
  render() {
    if (this.props.data.loading) {
      return (
        <View>
          <Spinner size="large" />
        </View>
      )
    }
    const { name, distance, place, stepP, stepN, createdAt, description } = this.props.data.Track
    return (
      <View>
        <Card>
          <Text>{name}</Text>
          <View>
            <Text>{distance}</Text>
            <Text>{place}</Text>
          </View>
          <View>
            <Text>{stepP}</Text>
            <Text>{stepN}</Text>
          </View>
          <Text>{moment(createdAt).format('DD/MM/YY')}</Text>
          <Text>{description}</Text>
        </Card>
        <Card>
          <Text>Carte</Text>
        </Card>
      </View>
    )
  }
}

const trackQuery = gql`
  query($id: ID){
    Track(id: $id) {
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

const TrackDetails = connect(null, null)(
  graphql(trackQuery, {
    options: props => ({
      variables: { id: props.navigation.state.params.id }
    })
  })(TrackDetailsUnlinked)
)

export { TrackDetails }
