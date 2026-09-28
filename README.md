# JavaScript Guide

## Table of contents
* [Types](#types)
* [Variables](#variables)
* [Objects](#objects)
* [Arrays](#arrays)
* [Loops](#loops)
* [This](#this)

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

## Objects
  When you want to create object use `{}`
  ```javascript
  const items = {
    id: 1,
    name: 'Kate',
    surname: 'Watson',
  };

  console.log(items); // {id: 1, name: "Kate", surname: "Watson"}
  console.log(items.name); // Kate 
  ```
  ```javascript
  const fullName = 'Kate Watson';

  const items = {
    fullName,
    age: 25,
  };

  console.log(items.fullName); // Kate Watson
  ```
  ```javascript
  const items = { 
    a: 1, 
    b: 2,
  };

  const newItems = { ...items, c: 3 }; 

  console.log(newItems); // {a: 1, b: 2, c: 3}
  ```

[Back to table of contents](#table-of-contents)

## Arrays
  When you want to create array use `[]`
  ```javascript
  const arr = [2, 10, 25];

  console.log(arr[0]); // 2 
  console.log(arr[1]); // 10
  console.log(arr[2]); // 25
  console.log(arr[3]); // undefined
  
  console.log(arr.length); // 3
  ```
  ```javascript
  const arrayInArray = [[0, 'Kate'], [1, 'Peter'], [2, 'Paul']];

  console.log(arrayInArray[1]); // [1, "Peter"]
  console.log(arrayInArray[1][1]); // Peter
  ```
  ```javascript
  const objectInArray = [
    {
      id: 1,
      name: 'Kate',
    },
    {
      id: 2,
      name: 'Peter',
    },
  ];

  console.log(objectInArray[0]); // {id: 1, name: "Kate"}
  console.log(objectInArray[0].name); // Kate
  ```
  * unshift()
  ```javascript
  const arr = [2, 10, 25];
  arr.unshift('Kate');
  
  console.log(arr); // ["Kate", 2, 10, 25]
  ```
  * shift()
  ```javascript
  const arr = ['Kate', 2, 10, 25];
  arr.shift('Kate');
  
  console.log(arr); // [2, 10, 25]
  ```
  * push()
  ```javascript
  const arr = [2, 10, 25];
  arr.push('Kate');
  
  console.log(arr); // [2, 10, 25, "Kate"]
  ```
  ```javascript
  const arr = [2, 10, 25];
  arr.push('Kate', 'Paul');
  
  console.log(arr); // [2, 10, 25, "Kate", "Paul"]
  ```
  * pop()
  ```javascript
  const arr = [2, 10, 25, 'Kate', 'Paul'];
  arr.pop('Paul');

  console.log(arr); // [2, 10, 25, "Kate"]
  ```
  * map()
  ```javascript
  const arr = [2, 10, 25, 'Kate', 'Paul'];
  
  console.log(arr); // [2, 10, 25, "Kate", "Paul"]

  const copyArr = arr.map(elementArr => {
    return elementArr;
  });

  console.log(copyArr); // [2, 10, 25, "Kate", "Paul"]
  ```
  * filter()
  ```javascript
  const arr = [2, 10, 25, 44, 18, 61];

  const copyArr = arr.filter(elementArr => {
    return elementArr >= 18;
  });

  console.log(copyArr); // [25, 44, 18, 61]
  ```
  * every()
  ```javascript
  const arr = [2, 10, 25, 44, 18, 61];

  const copyArr = arr.every(elementArr => {
    return elementArr % 2 === 0;
  });

  console.log(copyArr); // false
  ```
  * some()
  ```javascript
  const arr = [2, 10, 25, 44, 18, 61];

  const copyArr = arr.some(elementArr => {
    return elementArr >= 60;
  });

  console.log(copyArr); // true
  ```
  * join()
  ```javascript
  const arr = ['Kate', 'Paul', 'Peter'];

  const contentArr = arr.join(''); 

  console.log(contentArr); // KatePaulPeter

  const contentArrLength = arr.join('').length;

  console.log(contentArrLength); // 13, because we have 'KatePaulPeter';
  ```
  ```javascript
  const contentArr = arr.join(' '); 

  console.log(contentArr); // Kate Paul Peter
  ```
  ```javascript
  const contentArr = arr.join(' - ');

  console.log(contentArr); // Kate - Paul - Peter
  ```
  * splice()
  ```javascript
  const arr = ['Kate', 'Paul', 'Peter'];

  const contentArr = arr.splice(1, 1);

  console.log(contentArr); // ["Paul"]
  console.log(arr); // ["Kate", "Peter"]
  ```
  ```javascript
  const arr = ['Kate', 'Paul', 'Peter'];

  const contentArr = arr.splice(1, 2);

  console.log(contentArr); // ["Paul", "Peter"]
  console.log(arr); // ["Kate"]
  ```
  * slice()
  ```javascript
  const arr = ['Kate', 'Paul', 'Peter'];

  const contentArr = arr.slice(1, 2);

  console.log(contentArr); // ["Paul"]
  console.log(arr); // ["Kate", "Paul", "Peter"]
  ```
  ```javascript
  const arr = ['Kate', 'Paul', 'Peter'];

  const contentArr = arr.slice(0, 2);

  console.log(contentArr); // ["Kate", "Paul"]
  console.log(arr); // ["Kate", "Paul", "Peter"]
  ```


[Back to table of contents](#table-of-contents)

## Loops

```javascript
const arr = [3, 5, 7];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);  // 3  5  7
};
```
```javascript
const arr = [3, 5, 7];

for (let i in arr) {
  console.log(i);  // 0  1  2
};
```
```javascript
const arr = [3, 5, 7];

for (let i of arr) {
  console.log(i);  // 3  5  7
};
```
```javascript
let i = 1;

while (i <= 5) {
    console.log(i); // 1  2  3  4  5
    i++;
};
```
```javascript
const names = ["Kate", "Paul", "Peter"];
let i = 0;

while (i < names.length) {
    console.log(names[i]); // Kate  Paul  Peter
    i++;
};
```
```javascript
let i = 0;

do {
   i++;
   console.log(i); // 1  2  3  4  5
} while (i < 5);
```
```javascript
let i = 0;

do {
   console.log(i); // 0  1  2  3  4
   i++;
} while (i < 5);
```
```javascript
const names = ["Kate", "Paul", "Peter"];
let i = 0;

do {
    console.log(names[i]); //  Kate  Paul  Peter
    i++;
} while (i < names.length);
```
```javascript
const names = ["Kate", "Paul", "Peter"];
let i = 0;

do {
    i++;
    console.log(names[i]); //  Paul  Peter  undefined
} while (i < names.length);
```
```javascript
const names = ["Kate", "Paul", "Peter"];
let i = 0;

do {
    console.log(names[i]); //  Kate
    i++;
} while (false);
```
```javascript
const names = ["Kate", "Paul", "Peter"];
let i = 0;

do {
    i++;
    console.log(names[i]); //  Paul
} while (false);
```
```javascript
const names = ["Kate", "Paul", "Peter"];

names.forEach(name => {
  console.log(name);  //  Kate  Paul  Peter
});
```
```javascript
const names = ["Kate", "Paul", "Peter"];

names.forEach((name, index) => {
  console.log(name, index);  //  Kate 0  Paul 1  Peter 2
});
```
```javascript
const names = ["Kate", "Paul", "Peter"];

names.forEach((name, index) => {
  if (index === 1) {
    console.log(name);  //  Paul
  }
});
```

[Back to table of contents](#table-of-contents)

## This

```javascript
const fn = function() {
  console.log(this); // Window {}
};

fn();
```
```javascript
const fn = function() {
  console.log(this.name); // Kate
};

const obj = {
  name: 'Kate',
  age: '25',
  fun: fn
};

obj.fun();
```
```javascript
const obj = {
  name: 'Kate',
  age: '25',
};

const fn = function() {
  console.log(this.age); // undefined
};

fn();
```
```javascript
const obj = {
  name: 'Kate',
  age: '25',
};

const fn = function() {
  console.log(this.age); // 25
};

fn.call(obj); 
```
```javascript
const obj = {
  name: 'Kate',
  age: '25',
};

const fn = function(name) {
  console.log(this.age); // 25
};

const fnBind = fn.bind(obj);

fnBind();
```
```javascript
const obj = {
  name: 'Peter',
  age: '30',

  showAge() {
    console.log(this.age, this); // 30, {name: "Peter", age: "30", showAge: ƒ, showAge2: ƒ}
  },

  showAge2: () => {
    console.log(this.age, this); // undefined, Window {}
  },
};

obj.showAge();
obj.showAge2();
```
```javascript
const obj = {
  names: ["Kate", "Paul", "Peter"],

  showNames: function() {
    this.names.forEach(function(name, index) {
      console.log(this.names[index]); // TypeError: Cannot read property '0' of undefined
    });
  }
};

obj.showNames();
```
```javascript
const obj = {
  names: ["Kate", "Paul", "Peter"],

  showNames: function() {
    this.names.forEach(function(name, index) {
      console.log(this); // Window {}
    });
  }
};

obj.showNames();
```
```javascript
const obj = {
  names: ["Kate", "Paul", "Peter"],

  showNames: function() {
    const that = this;
    this.names.forEach(function(name, index) {
      console.log(that.names[index]); // Kate Paul Peter
    });
  }
};

obj.showNames();
```
```javascript
const obj = {
  names: ["Kate", "Paul", "Peter"],

  showNames: function() {
    this.names.forEach((name, index) => {
      console.log(this.names[index]); // Kate Paul Peter
    });
  }
};

obj.showNames();
```
```javascript
const obj = {
  names: ["Kate", "Paul", "Peter"],

  showNames: function() {
    this.names.forEach(function(name, index) {
      console.log(this.names[index]); // Kate Paul Peter
    }.bind(this));
  }
};

obj.showNames();
```
```javascript
const obj = {
  names: ["Kate", "Paul", "Peter"],

  showNames: function() {
    for (const name of this.names) {
      console.log(name); // Kate Paul Peter
    }
  }
};

obj.showNames();
```

[Back to table of contents](#table-of-contents)