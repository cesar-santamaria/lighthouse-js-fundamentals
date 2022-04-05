const conditionalSum = function (values, condition) {
  // Your code here
  let sum = 0
  for (let i = 0; i < values.length; i++) {
    if (condition === 'even' && values[i] % 2 === 0) {
      sum = sum + values[i]
    }
    if (condition === 'odd' && values[i] % 2 !== 0) {
      sum = sum + values[i]
    }
  }
  return sum
}

conditionalSum([1, 2, 3, 4, 5], 'even')
conditionalSum([1, 2, 3, 4, 5], 'odd')
conditionalSum([13, 88, 12, 44, 99], 'even')
conditionalSum([], 'odd')
