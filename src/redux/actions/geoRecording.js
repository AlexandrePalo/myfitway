export const startRecordingGeo = () => ({
  type: 'START_RECORDING_GEO'
})

export const stopRecordingGeo = () => ({
  type: 'STOP_RECORDING_GEO'
})

export const resetRecordingGeo = () => ({
  type: 'RESET_RECORDING_GEO'
})

export const addTrkptRecordingGeo = (trkpt) => ({
  type: 'ADD_TRKPT_RECORDING_GEO',
  payload: trkpt
})

export const setTitleRecordingGeo = (title) => ({
  type: 'SET_TITLE_RECORDING_GEO',
  payload: title
})

export const setDescriptionRecordingGeo = (description) => ({
  type: 'SET_DESCRIPTION_RECORDING_GEO',
  payload: description
})

export const setSharedInfoRecordingGeo = (shared, title, description) => ({
  type: 'SET_SHARED_INFO_RECORDING_GEO',
  shared,
  title,
  description
})

export const finalizeRecordingGeo = () => ({
  type: 'FINALIZE_RECORDING_GEO'
})
