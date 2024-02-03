function crosswordSolver(emptyPuzzle, words) {
  const puzzleRows = emptyPuzzle.split('\n');

  // Validate input
  if (puzzleRows.length !== words.length) {
    console.log('Error');
    return;
  }

  // Initialize the puzzle grid
  const puzzleGrid = puzzleRows.map(row => row.split(''));

  // Fill in the words
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const row = puzzleGrid[i];

    // Check if the length of the word matches the number in the puzzle
    if (word.length !== parseInt(row[0], 10)) {
      console.log('Error');
      return;
    }

    // Fill in the characters
    for (let j = 0; j < word.length; j++) {
      if (row[j + 1] === '.' || row[j + 1] === word[j]) {
        row[j + 1] = word[j];
      } else {
        console.log('Error');
        return;
      }
    }
  }

  // Print the solved puzzle
  puzzleGrid.forEach(row => console.log(row.join('')));
}

// Example usage
const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'iell', 'anta', 'onan'];

crosswordSolver(emptyPuzzle, words);