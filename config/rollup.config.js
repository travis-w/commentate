import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'];

export default {
  input: 'src/rollup.ts',
  // Messing around with different output types. May need differnet input depending on format
  // Also need to do research on which formats we should build
  output: [
    {
      file: 'dist/rollup.umd.js',
      format: 'umd'
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
    commonjs(),
    typescript(),
    babel({ babelHelpers: 'bundled' })
  ]
};