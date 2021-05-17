const finalPosition = function (moves) {
  let initialMove = [0,0];
  for(const move of moves) {
    if (move === 'north') {
      initialMove[1]++;
    }
    else if (move === 'south') {
      initialMove[1]--;
    }
    else if (move === 'east'){
      initialMove[0]++;
    }
    else if (move === 'west'){
      initialMove[0]--;
    }
  }
  return initialMove;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));