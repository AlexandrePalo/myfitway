const INITIAL_STATE = {
  category: 1
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CATEGORY_CHANGED':
      return { ...state, category: action.payload }
    default:
      return state
  }
}
