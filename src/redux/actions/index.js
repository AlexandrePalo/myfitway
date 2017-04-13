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

export const searchTextChanged = (text) => ({
  type: 'TEXT_SEARCH_CHANGED',
  payload: text
})

export const distanceMinChanged = (distance) => ({
  type: 'DISTANCE_MIN_CHANGED',
  payload: distance
})

export const distanceMaxChanged = (distance) => ({
  type: 'DISTANCE_MAX_CHANGED',
  payload: distance
})

export const durationMinChanged = (duration) => ({
  type: 'DURATION_MIN_CHANGED',
  payload: duration
})

export const durationMaxChanged = (duration) => ({
  type: 'DURATION_MAX_CHANGED',
  payload: duration
})

export const categoryChanged = (category) => ({
  type: 'CATEGORY_CHANGED',
  payload: category
})

export const emailSignInChanged = (email) => ({
  type: 'EMAIL_SIGNIN_CHANGED',
  payload: email
})

export const passwordSignInChanged = (password) => ({
  type: 'PASSWORD_SIGNIN_CHANGED',
  payload: password
})

export const passwordConfirmationSignInChanged = (password) => ({
  type: 'PASSWORD_CONFIRMATION_SIGNIN_CHANGED',
  payload: password
})

export const errorPasswordSignIn = () => ({
  type: 'ERROR_PASSWORD_SIGNIN'
})

export const createUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_USER_REQUEST' })

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: 'CREATE_USER_SUCCESS',
          payload: user
        })
        Actions.login({ type: 'reset' })
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_USER_FAIL',
          payload: error
        })
      })
  }
}

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
