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
      })
      .catch(error => {
        dispatch({
          type: 'CREATE_USER_FAIL',
          payload: error
        })
      })
  }
}

export const showedSignInError = () => ({
  type: 'SHOWED_SIGNIN_ERROR'
})

export const createUserReset = () => ({
  type: 'CREATE_USER_RESET'
})
