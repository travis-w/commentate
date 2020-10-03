import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import serve from "rollup-plugin-serve";
import pkg from '../package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs'];

export default [
  {
    input: 'src/Commentate.ts',
    // Messing around with different output types. May need differnet input depending on format
    // Also need to do research on which formats we should build
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'commentate'
      },
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({jsx: 'react'}),
      babel({babelHelpers: 'bundled'}),
      serve({
        contentBase: ['dist', 'dev-server']
      })
    ]
  }
];