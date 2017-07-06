const fs = require('fs')
const config = require('../rollup.config')
const argv = require('yargs').argv
const rollup = require('rollup')
const {BUILD_FORMAT} = process.env

let cache

rollup.rollup(Object.assign(config, {
  cache: cache
})).then(function (bundle) {
  const result = bundle.generate({
    format: BUILD_FORMAT
  })

  cache = bundle

  fs.writeFileSync('bundle.js', result.code)

  bundle.write({
    format: BUILD_FORMAT,
    dest: 'dist/index.js'
  })
}).catch(console.error)