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
        Actions.drawer()
      })
      .catch(error => {
        dispatch({
          type: 'LOGIN_USER_FAIL'
        })
      })
  }
}

export const showedLoginError = () => ({
  type: 'SHOWED_LOGIN_ERROR'
})

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT_USER_REQUEST' })

    firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'LOGOUT_USER_SUCCESS' })
        Actions.auth({ type: 'reset' })
      })
      .catch(error => {
        dispatch({ type: 'LOGOUT_USER_FAIL' })
      })
  }
}

export const requestUpdateLoggedIn = () => ({ type: 'REQUEST_UPDATE_LOGGED_IN' })

export const updateLoggedIn = (user) => ({
  type: 'UPDATE_LOGGED_IN',
  payload: user
})

export const failUpdateLoggedIn = () => ({ type: 'FAIL_UPDATE_LOGGED_IN' })
