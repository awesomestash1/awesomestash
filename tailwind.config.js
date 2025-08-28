const theme = require('hextra/tailwind.config.js')

module.exports = {
  ...theme,
  content: [
    ...theme.content,
    './layouts/**/*.html' // This is the line we are adding
  ]
}