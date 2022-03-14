
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./uniswapv2sdk-for-polygon.cjs.production.min.js')
} else {
  module.exports = require('./uniswapv2sdk-for-polygon.cjs.development.js')
}
