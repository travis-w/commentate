import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/rollup.js',
  // Messing around with different output types. May need differnet input depending on format
  // Also need to do research on which formats we should build
  output: [
    {
      file: 'dist/rollup.umd.js',
      format: 'umd',
      name: 'rollupUMD'
    },
    {
      file: 'dist/rollup.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/rollup.es.js',
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'inline' }),
    commonjs(),
  ]
};