# JavaScript Guide

## Table of contents
* [Types](#types)
* [Variables](#variables)

## Types
* Primitives
  * `string`
  ```javascript
  const foo = 'name';
  console.log(typeof foo); // string
  ```
  * `number`
  ```javascript
  const foo = 10;
  console.log(typeof foo); // number
  ```
  * `boolean`
  ```javascript
  let foo = true;
  console.log(typeof foo); // boolean
  ```
  * `null`
  ```javascript
  let foo = null;
  console.log(typeof foo); // object
  ```
  * `undefined`
  ```javascript
  let foo;
  console.log(typeof foo); // undefined
  ```
  * `symbol`

  Symbols cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.

* Complex
  * `object`
  * `array`
  * `function`

[Back to table of contents](#table-of-contents)

## Variables
  Always use `const` or `let` to declare variables. In ES5 used `var` but ES6 has created new variables.
  * `const`
  ```javascript
  const noo = 10;
  console.log(noo); // 10
  ```
  * `let`
  ```javascript
  let soo = 'Name';
  console.log(soo); // Name
  ```
  * `var`
  ```javascript
  var boo = false;
  console.log(boo); // false
  ```

[Back to table of contents](#table-of-contents)