import { connect } from 'react-redux'
import { gql, graphql } from 'react-apollo'
import WelcomeTrackList from '../presentationals/WelcomeTrackList'

const categoriesQuery = gql`
  query categoriesQuery {
    categories {
      code
      name
    }
  }
`

export default connect(
  null,
  null
)(graphql(categoriesQuery)(WelcomeTrackList))
