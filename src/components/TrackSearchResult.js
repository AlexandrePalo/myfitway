import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { gql, graphql } from 'react-apollo'

const TrackSearchResult = () => {
  return (
    <View style={styles.containerStl}>
      <Text>Résultats ...</Text>
    </View>
  )
}

const styles = {
  containerStl: {
    paddingTop: 65,
    backgroundColor: '#f5f5f5',
    flex: 1
  }
}

const tracksQuery = gql`
  query tracksQuery {
    tracks {
      title
      distance
      description
    }
  }
`

export default connect(
  null,
  null
)(graphql(tracksQuery)(TrackSearchResult))
