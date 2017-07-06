const fs = require('fs')
const {plugins, external, globals} = require('./utils/rollup.config')
const argv = require('yargs').argv
const rollup = require('rollup')
const libs = argv._

let cache

libs.forEach((lib) => {
  // 按 UMD、CommonJS 规范构建
  ['umd', 'cjs'].forEach((format) => {
    // UMD 格式需要把依赖包打进目标文件
    // CommonJS 格式需要将依赖包申明为外部依赖
    rollup.rollup(Object.assign(
      // 公用配置
      {
        entry: `src/${lib}/index.js`,
        plugins,
        cache
      },
      // CommonJS 独有配置
      format === 'cjs' ? {
        external,
        globals
      } : null)
    ).then(function (bundle) {
      const result = bundle.generate({
        format,
        moduleName: lib
      })

      cache = bundle

      bundle.write({
        format,
        moduleName: lib,
        dest: `libs/${lib}/index${format === 'umd' ? '.umd' : ''}.js`
      })
    }).catch(console.error)
  })
})