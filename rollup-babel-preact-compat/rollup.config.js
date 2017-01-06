import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-strict-alias'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import path from 'path'

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    alias({
      'react': path.resolve('./node_modules/preact-compat/src/index.js'),
      'react-dom': path.resolve('./node_modules/preact-compat/src/index.js')
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
