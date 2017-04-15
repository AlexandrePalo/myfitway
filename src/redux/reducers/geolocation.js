const INITIAL_STATE = {
  recording: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'START_RECORDING':
      return { ...state, recording: true }
    case 'STOP_RECORDING':
      return { ...state, recording: false }
    default:
      return state
  }
}
