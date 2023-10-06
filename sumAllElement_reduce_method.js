const arrNum = [1, 2, 2, 3];

const sumAll = (arrNum) => {

const result = arrNum.reduce((acc, currentValue) => {
  return acc + currentValue
}, 0) 

console.log(result)
  }


sumAll(arrNum);
