import { combineReducers } from 'redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import authReducer from './auth'
import trackSearchReducer from './trackSearch'
import globalReducer from './global'
import signInReducer from './signIn'
import geolocationReducer from './geolocation'

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://myfitway-api.alexandrepalo.com/graphql'
  })
})

export const mainReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
  trackSearch: trackSearchReducer,
  signIn: signInReducer,
  geolocation: geolocationReducer,
  apollo: client.reducer()
})
