/* @jsx node */

import jsxPrag from 'jsx-pragmatic';
// const jsxPrag = require('jsx-pragmatic');
import testFile2 from './test';
// const testFile2 = require('./test');
const node = jsxPrag.node;
const dom = jsxPrag.dom;

let test = {
  a: 1,
  b: 2,
}

console.log({
  ...test
})

console.log({
  ...testFile2
})

console.log(jsxPrag);

function getEl() {
  return (
    <div>Test</div>
  ).render(dom());
}

window.onload = function() {
  console.log(getEl())
  document.body.append(getEl())
}