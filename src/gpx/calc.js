import moment from 'moment'

const degToRad = (d) => {
  return (d * Math.PI / 180)
}
const radToDef = (r) => {
  return (r * 180 / Math.PI)
}

const distance2Coords = (a, b) => {
  // Distance between 2 coordinates using the orthodromic formula.
  // Distance in meters
  const latA = degToRad(a.latitude)
  const lonA = degToRad(a.longitude)
  const latB = degToRad(b.latitude)
  const lonB = degToRad(b.longitude)

  const m = 6378 * 1000 * Math.acos(
    Math.sin(latA) * Math.sin(latB) + Math.cos(latA) * Math.cos(latB) * Math.cos(lonB - lonA)
  )
  return m
}

const step2Coords = (a, b) => {
  return {
    value: Math.abs(a.elevation - b.elevation),
    up: ((b.elevation - a.elevation) >= 0)
  }
}

const instantSpeed2Coords = (a, b) => {
  const ms = (b.distance - a.distance) * 1000 / (b.timestamp - a.timestamp)
  const kmh = ms * 3600 / 1000
  return kmh
}

export { distance2Coords, step2Coords, instantSpeed2Coords }
