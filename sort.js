const array = [
  {
    name: "Agi",
    age: 5,
  },
  {
    name: "Bagi",
    age: 2,
  },
  {
    name: "Cagi",
    age: 3,
  },
];

const result = array.sort((a,b) => a.name - b.name)
console.log(result);
