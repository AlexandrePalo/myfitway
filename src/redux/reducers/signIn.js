const INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirmation: '',
  loading: false,
  error: null
}

const signIn = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_SIGNIN_CHANGED':
      return { ...state, email: action.payload }
    case 'PASSWORD_SIGNIN_CHANGED':
      return { ...state, password: action.payload }
    case 'PASSWORD_CONFIRMATION_SIGNIN_CHANGED':
      return { ...state, passwordConfirmation: action.payload }
    case 'CREATE_USER_REQUEST':
      return { ...state, loading: true }
    case 'ERROR_PASSWORD_SIGNIN':
      return {
        ...state,
        loading: false,
        password: '',
        passwordConfirmation: '',
        error: 'Les deux mots de passe ne sont pas identiques'
      }
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        email: '',
        password: '',
        passwordConfirmation: '',
        error: ''
      }
    case 'CREATE_USER_FAIL':
      let error = 'Erreur inconnue'
      const { code } = action.payload
      if (code === 'auth/invalid-email') {
        error = 'Email invalide'
      }
      if (code === 'auth/weak-password') {
        error = 'Le mot de passe doit contenir au moins 6 caractères'
      }
      if (code === 'auth/email-already-in-use') {
        error = 'Email déjà utilisé pour un compte'
      }
      return {
        ...state,
        loading: false,
        password: '',
        passwordConfirmation: '',
        error,
      }
    default:
      return state
  }
}

export default signIn
