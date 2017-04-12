const INITIAL_STATE = {
  category: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CATEGORY_CHANGED':
      return { ...state, category: action.payload }
    default:
      return state
  }
}
