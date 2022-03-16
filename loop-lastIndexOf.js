const lastIndexOf = (array, value) => {
  if (!array.length){
    return -1
  }
 for (let i = 0; i < array.length; i++){
   return array.lastIndexOf(value)
 }
}

/* 
  When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.
*/

console.log(lastIndexOf([0, 1, 4, 1, 2], 1))
console.log(lastIndexOf([0, 1, 4, 1, 2], 2))
console.log(lastIndexOf([0, 1, 4, 1, 2], 3))
console.log(lastIndexOf([5, 5, 5], 5))
console.log(lastIndexOf([], 3))
