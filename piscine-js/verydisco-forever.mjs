import fs from 'fs';

const argument = process.argv[2];

function makeVeryDisco(word) {
  const length = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, length);
  const secondHalf = word.slice(length);
  return secondHalf + firstHalf;
}

function processArgument(arg) {
  const words = arg.split(' ');
  const result = words.map(word => makeVeryDisco(word)).join(' ');

  fs.writeFile('verydisco-forever.txt', result, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Result written to verydisco-forever.txt');
  });
}

processArgument(argument);
