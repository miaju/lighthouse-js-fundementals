
const finalPosition = function (moves, end = [0,0]) {

  for(const move of moves){
    switch(move){
    case 'north':
      end[1] += 1;
      break;
    case 'south':
      end[1] -= 1;
      break;
    case 'west':
      end[0] -= 1;
      break;
    case 'east':
      end[0] += 1;
      break;
    }
  }
  return end;
}
let moves = [
  'north',
  'north',
  'west',
  'west',
  'north',
  'east',
  'north'
]

console.log(finalPosition(moves))
