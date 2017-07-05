import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

import postcss from 'rollup-plugin-postcss'
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

const pkg = require('./package.json')
const external = Object.keys(pkg.dependencies)
const plugins = [
  postcss({
    plugins: [
      simplevars(),
      nested(),
      cssnext({warnForDuplicates: false}),
      cssnano()
    ],
    extensions: ['.css']
  }),
  resolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  babel(babelrc()),
  uglify()
]

if (process.env.BUILD !== 'production') {
  // do something when build
}

export default {
  entry: 'src/index.js',
  plugins: plugins,
  external: external,
  globals: {
    axios: 'axios'
  },
  targets: [
    {
      dest: 'dist/index.js',
      format: 'umd',
      moduleName: 'day',
      sourceMap: true
    },
    {
      dest: 'dist/index.cjs.js',
      format: 'cjs',
      sourceMap: true
    }
  ]
}
