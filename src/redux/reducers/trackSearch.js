const INITIAL_STATE = {
  textSearch: '',
  distanceMin: 0,
  distanceMax: 100,
  durationMin: 0,
  durationMax: 300,
  category: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEXT_SEARCH_CHANGED':
      return { ...state, textSearch: action.payload }
    case 'DISTANCE_MIN_CHANGED':
      return { ...state, distanceMin: action.payload }
    case 'DISTANCE_MAX_CHANGED':
      return { ...state, distanceMax: action.payload }
    case 'DURATION_MIN_CHANGED':
      return { ...state, durationMin: action.payload }
    case 'DURATION_MAX_CHANGED':
      return { ...state, durationMax: action.payload }
    case 'CATEGORY_CHANGED':
      return { ...state, category: action.payload }
    default:
      return state
  }
}
