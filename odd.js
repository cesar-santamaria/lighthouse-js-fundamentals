const isOdd = (number)=>{
  if (number % 2 === 0){
    return number + " is even"
  } else{
    return number + " is odd"
  }
}

console.log(isOdd(5))