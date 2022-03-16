const concat = (arr1 = [], arr2 = []) => {
  let array = []
  for (let i = 0; i < arr1.length; i++) {
    array.push(arr1[i])
  }
  for (let z = 0; z < arr2.length; z++) {
    array.push(arr2[z]) 
  }
  return array
}

concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ];
concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ];
concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ];
concat([ 5, 10 ], []), "=?", [ 5, 10 ];