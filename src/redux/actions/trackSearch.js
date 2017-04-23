export const searchTextChanged = (text) => ({
  type: 'TEXT_SEARCH_CHANGED',
  payload: text
})

export const distanceMinChanged = (distance) => ({
  type: 'DISTANCE_MIN_CHANGED',
  payload: distance
})

export const distanceMaxChanged = (distance) => ({
  type: 'DISTANCE_MAX_CHANGED',
  payload: distance
})

export const durationMinChanged = (duration) => ({
  type: 'DURATION_MIN_CHANGED',
  payload: duration
})

export const durationMaxChanged = (duration) => ({
  type: 'DURATION_MAX_CHANGED',
  payload: duration
})
