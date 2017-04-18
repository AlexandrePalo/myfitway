import {
  distance2Coords, step2Coords, getBounds, instantSpeed2Coords, maxSpeed,
  averageSpeed } from '../../gpx'

const INITIAL_STATE = {
  // Miscellaneous
  recording: false,
  shared: false,
  shared_title: false,
  shared_description: false,
  title: '',
  description: '',
  // On add trkpt
  stepUp: 0,
  stepDown: 0,
  trkpts: [],
  // On finalize only
  averageSpeed: 0,
  maxSpeed: 0,
  bounds: null,
  location: null, // en attente avec une API pour trouver le dept à partir des bounds,
  sending: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'START_RECORDING_GEO':
      return { ...state, recording: true }
    case 'STOP_RECORDING_GEO':
      clearInterval(state.timer)
      return { ...state, recording: false }
    case 'RESET_RECORDING_GEO':
      clearInterval(state.timer)
      return INITIAL_STATE
    case 'SET_TITLE_RECORDING_GEO':
      return { ...state, title: action.payload }
    case 'SET_DESCRIPTION_RECORDING_GEO':
      return { ...state, description: action.payload }
    case 'FINALIZE_RECORDING_GEO':
      return {
        ...state,
        averageSpeed: averageSpeed(state.trkpts),
        maxSpeed: maxSpeed(state.trkpts),
        bounds: getBounds(state.trkpts)
      }
    case 'SET_SHARED_INFO_RECORDING_GEO':
      return {
        state,
        shared: action.shared,
        shared_title: action.title,
        shared_description: action.description
      }
    case 'ADD_TRKPT_RECORDING_GEO':
      const lastPoint = state.trkpts.length > 0 ? state.trkpts[state.trkpts.length - 1] : null
      const step = state.trkpts.length > 0 ? step2Coords(lastPoint, action.payload) : null
      const lastDistance = lastPoint ? lastPoint.distance : 0
      const distance = lastPoint ? (lastDistance + distance2Coords(lastPoint, action.payload)) : 0
      const instantSpeed = lastPoint ? instantSpeed2Coords(lastPoint, { ...action.payload, distance }) : 0
      return {
        ...state,
        stepUp: (step && step.up) ? (state.stepUp + step.value) : state.stepUp,
        stepDown: (step && step.down) ? (state.stepDown + step.value) : state.stepDown,
        trkpts: [...state.trkpts, {
          ...action.payload,
          distance,
          instantSpeed,
        }]
      }
  default:
      return state
  }
}
