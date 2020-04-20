// const arr = ['Kate', 'Paul', 'Peter'];

// const contentArr = arr.splice(1, 2); // KatePaulPeter
// // const copyArr = arr.join(' '); // Kate Paul Peter
// // const copyArr = arr.join(' - '); // Kate - Paul - Peter
// // const copyArr = arr.join('').length; // 13
// console.log(contentArr); // ["Paul", "Peter"]
// console.log(arr); // ["Kate"]

const arr = ['Kate', 'Paul', 'Peter'];

const contentArr = arr.slice(0, 2);

console.log(contentArr); // ["Paul"]
console.log(arr); // ["Kate", "Paul", "Peter"]