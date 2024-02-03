function crosswordSolver(emptyPuzzle, words) {
  const puzzleRows = emptyPuzzle.trim().split('\n');
  const puzzleGrid = puzzleRows.map(row => row.split(''));

  //puts in words
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (puzzleGrid[i][j] !== '.') {
        puzzleGrid[i][j] = word[j];
      } else if (puzzleGrid[j][i] !== '.') {
        puzzleGrid[j][i] = word[j];
      }puzzleGrid[i][j] === '0'
    }
  }

  //output
    puzzleGrid.forEach(row => console.log(row.join('')));
}

const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(emptyPuzzle, words);