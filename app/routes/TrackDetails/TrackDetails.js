import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { graphql, gql } from 'react-apollo'
import moment from 'moment'
import { MaterialIcons } from '@expo/vector-icons'
import { Card, Spinner } from '../../components'
import { styles } from './styles'

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
          <View style={styles.containerInfoStl}>
            <Text style={styles.titleStl}>{name}</Text>
            <View style={styles.disPlaceContainerStl}>
              <View style={styles.infoWrapperStl}>
                <MaterialIcons name="all-inclusive" size={20} color="#000" style={styles.infoIconStl} />
                <Text style={styles.subTitleStl}>{distance} km</Text>
              </View>
              <View style={styles.infoWrapperStl}>
                <MaterialIcons name="place" size={20} color="#000" style={styles.infoIconStl} />
                <Text style={styles.subTitleStl}>{place}</Text>
              </View>
            </View>
            <View style={styles.stepContainerStl}>
              <View style={styles.infoWrapperStl}>
                <MaterialIcons name="trending-up" size={20} color="#000" style={styles.infoIconStl} />
                <Text style={styles.subTitleStl}>{stepP} m</Text>
              </View>
              <View style={styles.infoWrapperStl}>
                <MaterialIcons name="trending-down" size={20} color="#000" style={styles.infoIconStl} />
                <Text style={styles.subTitleStl}>{stepN} m</Text>
              </View>
            </View>
            <Text style={styles.createdAtStl}>Créé le {moment(createdAt).format('DD/MM/YY')}</Text>
            <Text style={styles.descriptionStl}>{description}</Text>
          </View>
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
