import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from '../reducers'
import store from './store'
import Router from './routes'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <Router />
      </ApolloProvider>
    )
  }
}

export default App
