import { combineReducers } from 'redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import authReducer from './auth'
import trackSearchReducer from './trackSearch'
import globalReducer from './global'

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://myfitway-api.alexandrepalo.com/graphql'
  })
})

export const mainReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
  trackSearch: trackSearchReducer,
  apollo: client.reducer()
})
