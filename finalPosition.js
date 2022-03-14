const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = (moves) => {
  let x = 0
  let y = 0
  let position = []

  for (const move of moves) {
    if (move.includes('north')) {
      y++
    }
    if (move.includes('east')) {
      x++
    }
    if (move.includes('south')) {
      y--
    }
    if (move.includes('west')) {
      x--
    }
  }
  position.push(x)
  position.push(y)
  return position
}

console.log(finalPosition(moves))
