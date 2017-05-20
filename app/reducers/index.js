import { combineReducers } from 'redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj2x38286dp110194xrlc9xrr'
  })
})

export default combineReducers({
  apollo: client.reducer()
})
