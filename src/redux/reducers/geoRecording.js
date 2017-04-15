import { distance2Coords, step2Coords } from '../../gpx'

const INITIAL_STATE = {
  recording: false,
  trkpts: [],
  name: '',
  distance: 0,
  stepUp: 0,
  stepDown: 0,
  duration: 0,
  timer: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'START_RECORDING_GEO':
      return { ...state, recording: true, timer: action.payload }
    case 'STOP_RECORDING_GEO':
      clearInterval(state.timer)
      return { ...state, recording: false, timer: null }
    case 'RESET_RECORDING_GEO':
      clearInterval(state.timer)
      return { ...state, recording: false, timer: null, duration: 0 }
    case 'ADD_TRKPT_RECORDING_GEO':
      if (state.trkpts.length > 0) {
        const distance = (
          state.distance
          + distance2Coords(state.trkpts[state.trkpts.length - 1], action.payload)
        )
        const step = step2Coords(state.trkpts[state.trkpts.length - 1], action.payload)
        const stepUp = step.up ? (state.stepUp + step.value) : state.stepUp
        const stepDown = step.up ? state.stepDown : (state.stepDown + step.value)
        return { ...state, trkpts: [...state.trkpts, action.payload], distance, stepUp, stepDown }
      }
    return { ...state, trkpts: [...state.trkpts, action.payload] }

    case 'ADD_1_SEC_TIMER_RECORDING_GEO':
      return { ...state, duration: (state.duration + 1) }
    case 'SET_NAME_RECORDING_GEO':
      return { ...state, name: action.payload }
    default:
      return state
  }
}
