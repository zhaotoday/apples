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
  commonjs(),
  babel(babelrc()),
  resolve(),
  uglify()
]

if (process.env.BUILD !== 'production') {
  // do something when build
}

export default {
  entry: 'src/index.js',
  plugins: plugins,
  external: external,
  targets: [
    {
      dest: 'dist/a.js',
      format: 'umd',
      moduleName: 'rollupStarterProject',
      sourceMap: true
    },
    {
      dest: 'dist/b.js',
      format: 'cjs',
      sourceMap: true
    }
  ]
}
