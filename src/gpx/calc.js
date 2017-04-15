import math from 'mathjs'

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
  console.log(a.elevation)
  console.log(b.elevation)
  console.log(Math.abs(a.elevation - b.elevation))
  return {
    value: Math.abs(a.elevation - b.elevation),
    up: ((b.elevation - a.elevation) >= 0)
  }
}

export { distance2Coords, step2Coords }
