# JavaScript Guide

## Table of contents
* [Types](#types)
* [Variables](#variables)
* [Object](#object)

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
  ```javascript
  const noo = 10;
  noo = 20;

  console.log(noo); // Error: Assignment to constant variable
  ```
  ```javascript
  const noo;

  console.log(noo); // Error: Missing initializer in const declaration
  ```
  * `let`
  ```javascript
  let soo = 'Name';

  console.log(soo); // Name
  ```
  ```javascript
  let soo = 'Name';
  soo = 'Surname'

  console.log(soo); // Surname
  ```
  ```javascript
  let soo;

  console.log(soo); // undefined
  ```
  * `var`
  ```javascript
  var boo = false;

  console.log(boo); // false
  ```
  ```javascript
  var boo = false;
  boo = true

  console.log(boo); // true
  ```
  ```javascript
  var boo;

  console.log(boo); // undefined
  ```

[Back to table of contents](#table-of-contents)

## Object
  When you want to create object use `{}`
  ```javascript
  const item = {
    id: 1,
    name: 'Kate',
    surname: 'Watson',
  };

  console.log(item); // {id: 1, name: "Kate", surname: "Watson"}
  console.log(item.name); // Kate 
  ```
  ```javascript
  const fullName = 'Kate Watson';

  const item = {
    fullName,
    age: 25,
  };

  console.log(item.fullName); // Kate Watson
  ```

[Back to table of contents](#table-of-contents)