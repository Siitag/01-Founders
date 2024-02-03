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
    console.log(result);
  }

processArgument(argument);