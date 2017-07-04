import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import istanbul from 'rollup-plugin-istanbul'

let pkg = require('./package.json')
let external = Object.keys(pkg.dependencies)

let plugins = [
  babel(babelrc())
]

if (process.env.BUILD !== 'production') {
  plugins.push(istanbul({
    exclude: ['test/**/*', 'node_modules/**/*']
  }))
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
