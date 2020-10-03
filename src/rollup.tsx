/** @jsx node */

// @ts-ignore
import { node, dom } from 'jsx-pragmatic';
// import jsxPrag from 'jsx-pragmatic';
// const jsxPrag = require('jsx-pragmatic');
import testFile2 from './test';
// const testFile2 = require('./test');
// const node = jsxPrag.node;
// const dom = jsxPrag.dom;

let test = {
  a: 1,
  b: 2,
}

let x: number = 12;

console.log({
  ...test
})

console.log({
  ...testFile2
})


function getEl() {
  return (
    <div>Test</div>
  ).render(dom());
}

window.onload = function() {
  console.log(getEl())
  document.body.append(getEl())
}