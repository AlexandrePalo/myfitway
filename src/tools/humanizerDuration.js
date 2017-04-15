import humanizeDuration from 'humanize-duration'

const shortFrenchHumanizer = humanizeDuration.humanizer({
  language: 'shortFr',
  languages: {
    shortFr: {
      h: () => 'h',
      m: () => 'min',
      s: () => 's'
    }
  }
})

export { shortFrenchHumanizer }
