function range(start, end, step) {
  let numArray = []
  numArray.push(start)

  for (let i = start; i < end; i = i + step) {
    numArray.push(i + step)
  }
  if (numArray.length > end) {
    numArray.pop()
  }
  return numArray
}
console.log(range(0, 10, 2))
console.log(range(10, 30, 5))
console.log(range(-5, 2, 3))
