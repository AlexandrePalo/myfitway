import { combineReducers } from 'redux'
import geoRecordingReducer from './geoRecording'

export default combineReducers({
  recording: geoRecordingReducer
})
