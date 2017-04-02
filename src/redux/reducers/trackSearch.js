const INITIAL_STATE = {
  textSearch: '',
  distanceMin: 0,
  distanceMax: 100
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEXT_SEARCH_CHANGED':
      return { ...state, textSearch: action.payload }
    case 'DISTANCE_MIN_CHANGED':
      return { ...state, distanceMin: action.payload }
    case 'DISTANCE_MAX_CHANGED':
      return { ...state, distanceMax: action.payload }
    default:
      return state
  }
}
