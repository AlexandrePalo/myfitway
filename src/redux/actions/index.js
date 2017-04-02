import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const emailChanged = (email) => ({
  type: 'EMAIL_CHANGED',
  payload: email
})

export const passwordChanged = (password) => ({
  type: 'PASSWORD_CHANGED',
  payload: password
})

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_USER_REQUEST' })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: 'LOGIN_USER_SUCCESS',
          payload: user
        })
        Actions.tracks()
      })
      .catch(error => {
        dispatch({
          type: 'LOGIN_USER_FAIL'
        })
      })
  }
}
