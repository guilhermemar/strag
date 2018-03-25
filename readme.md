# strag

[![Build Status](https://travis-ci.org/guilhermemar/strag.svg?branch=master)](https://travis-ci.org/guilhermemar/strag)

A helper to create DOMELements more easily

## installation
```shell
npm i --save strag
```

## usage
## example

```javascript
const strag = require('strag');

const div = strag(`<div id='identification'>Content</div>`);

console.log(div.id) //identification
console.log(div.innerHTML) //Content

document.body.appendChild(div);
```
