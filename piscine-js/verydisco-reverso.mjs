import fs from 'fs';

function reverseVeryDisco(word) {
  const length = Math.floor(word.length / 2);
  const firstHalf = word.slice(0, length);
  const secondHalf = word.slice(length);
  return secondHalf + firstHalf;
}

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const words = data.split(' ');
  const result = words.map(word => reverseVeryDisco(word)).join(' ');
  console.log(result);
});