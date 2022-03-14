const howManyHundreds = (numberOfBottles) =>{
  let division = numberOfBottles / 100
  return Math.floor(division)
}

console.log(howManyHundreds(123456), "=?", 1234);
