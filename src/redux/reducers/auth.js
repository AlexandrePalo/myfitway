const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload }
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload }
    case 'LOGIN_USER_REQUEST':
      return { ...state, loading: true }
    case 'LOGIN_USER_FAIL':
      return {
        ...state,
        loading: false,
        password: '',
        error: 'Mauvais identifiants'
      }
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
        email: '',
        password: '',
        error: null
      }
    case 'LOGOUT_USER_REQUEST':
      return { ...state, loading: true }
    case 'LOGOUT_USER_SUCCESS':
      return { ...state, loading: false, user: null }
    case 'LOGOUT_USER_FAIL':
      return { ...state, loading: false, error: 'Erreur inconnue' }
    case 'SHOWED_LOGIN_ERROR':
      return { ...state, error: null }
    default:
      return state
  }
}
