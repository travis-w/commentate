import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import serve from "rollup-plugin-serve";
import jsx from 'acorn-jsx';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'];

export default {
  input: 'src/rollup.tsx',
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
  acornInjectPlugins: [
    jsx()
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ jsx: 'react' }),
    babel({ babelHelpers: 'bundled' }),
    serve({
      contentBase: ['dist', 'dev-server']
    })
  ]
};