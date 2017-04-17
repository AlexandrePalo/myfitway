import moment from 'moment'
import _ from 'lodash'

const chartDatasetAltDis = (trkpts) => {
  // For altitude function of distance from beginning
  return trkpts.map((t) => {
    return {
      x: t.distance,
      y: t.elevation
    }
  })
}

const getBounds = (trkpts) => {
  const bounds = {
    max_latitude: 0,
    min_latitude: 0,
    max_longitude: 0,
    min_longitude: 0,
    max_elevation: 0,
    min_elevation: 0
  }
  trkpts.forEach((t) => {
    if (t.latitude > bounds.max_latitude) {
      bounds.max_latitude = t.latitude
    }
    if (t.latitude < bounds.min_latitude) {
      bounds.min_latitude = t.latitude
    }
    if (t.longitude > bounds.max_longitude) {
      bounds.max_latitude = t.longitude
    }
    if (t.longitude < bounds.min_longitude) {
      bounds.max_latitude = t.longitude
    }
    if (t.elevation > bounds.max_elevation) {
      bounds.max_elevation = t.elevation
    }
    if (t.elevation < bounds.min_elevation) {
      bounds.min_elevation = t.elevation
    }
  })
  return bounds
}

const averageSpeed = (distance, duration) => {
  return distance / duration
}

const maxSpeed = (trkpts) => {
  let max = 0
  trkpts.forEach((t) => {
    if (t.instanceSpeed > maxSpeed) {
      max = t.instanceSpeed
    }
  })
  return max
}

const duration = (trkpts) => {
  return moment(_.last(trkpts).timestamp).diff(trkpts[0].timestamp, 'seconds')
}

export { chartDatasetAltDis, getBounds, averageSpeed, maxSpeed, duration }
