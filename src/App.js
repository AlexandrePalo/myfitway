import React, { Component } from 'react'
import firebase from 'firebase'
import { ApolloProvider } from 'react-apollo'
import store from './redux/store'
import { client } from './redux/reducers'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDkhkXVKALjhMUrpaOV7DVXG_mqUkBDfAo',
      authDomain: 'myfitway-667d8.firebaseapp.com',
      databaseURL: 'https://myfitway-667d8.firebaseio.com',
      storageBucket: 'myfitway-667d8.appspot.com',
      messagingSenderId: '394875134624'
    })
  }

  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <Router />
      </ApolloProvider>
    )
  }
}

export default App
