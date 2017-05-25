const INITIAL_STATE = {
  timerOn: false,
  timer: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return { ...state, timerOn: true }
    case 'STOP_TIMER':
      return { ...state, timerOn: false }
    case 'RESET_TIMER':
      return { ...state, timerOn: false, timer: 0 }
    case 'ADD_ONE_SEC_TIMER':
      return { ...state, timer: state.timer + 1 }
    default:
      return state
  }
}
