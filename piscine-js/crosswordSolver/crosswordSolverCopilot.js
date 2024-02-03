function crosswordSolver(emptyPuzzle, words) {
  const puzzleRows = emptyPuzzle.trim().split('\n');
  const puzzleGrid = puzzleRows.map(row => row.split(''));
  const startingPositions = [];

  // Find the starting positions for the words
  for (let i = 0; i < puzzleGrid.length; i++) {
    for (let j = 0; j < puzzleGrid[i].length; j++) {
      if (!isNaN(puzzleGrid[i][j])) {
        startingPositions.push([i, j]);
      }
    }
  }

  // Try to place each word in the puzzle
  for (let word of words) {
    let placed = false;

    for (let pos of startingPositions) {
      let [i, j] = pos;
      if (i + word.length <= puzzleGrid.length && j + word.length <= puzzleGrid[0].length) {
        let canPlace = true;

        // Check if the word can be placed at this position
        for (let k = 0; k < word.length; k++) {
          if (puzzleGrid[i + k][j] !== '.' && puzzleGrid[i + k][j] !== '0') {
            canPlace = false;
            break;
          }
        }

        // If the word can be placed, place it
        if (canPlace) {
          for (let k = 0; k < word.length; k++) {
            puzzleGrid[i + k][j] = word[k];
          }
          placed = true;
          break;
        }
      }
    }

    // If the word could not be placed, print 'Error' and return
    if (!placed) {
      console.log('Error');
      return;
    }
  }

  // Print the solved puzzle
  puzzleGrid.forEach(row => console.log(row.join('')));
}

const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(emptyPuzzle, words);