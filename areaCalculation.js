const calculateRectangleArea = (length, width) => {
  if (length * width <= 0) {
    return undefined
  } else {
    return length * width
  }
}

const calculateTriangleArea = (base, height) => {
  if ((base * height) / 2 <= 0) {
    return undefined
  } else {
    return (base * height) / 2
  }
}

const calculateCircleArea = (radius) => {
  if (2 * Math.PI * radius <= 0) {
    return undefined
  } else {
    return radius * radius * Math.PI
  }
}

console.log(calculateCircleArea(-1)) // should print undefined
