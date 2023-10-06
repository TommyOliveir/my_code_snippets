const array = ["tom", "april", "mark"];

const obj = {};

// for (const item of array) {
//   obj[item] = item;
// }

for (let i = 0; i < array.length; i++) {
  obj[array[i]] = i ;
}

console.log(obj); // This will display the resulting object
