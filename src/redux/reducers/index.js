import { combineReducers } from 'redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import authReducer from './auth'
import trackSearchReducer from './trackSearch'

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://myfitway-api.alexandrepalo.com/graphql'
  })
})

export const mainReducer = combineReducers({
  auth: authReducer,
  trackSearch: trackSearchReducer,
  apollo: client.reducer()
})
