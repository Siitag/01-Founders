import fs from 'fs/promises';

const [filePath, operation, newFileName] = process.argv.slice(2);

function encodeToBase64(data) {
  return Buffer.from(data).toString('base64');
}

function decodeFromBase64(data) {
  return Buffer.from(data, 'base64').toString('utf8');
}

async function processFile() {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    let result;
    let outputFileName;

    if (operation === 'encode') {
      result = encodeToBase64(content);
      outputFileName = newFileName || 'cypher.txt';
    } else if (operation === 'decode') {
      result = decodeFromBase64(content);
      outputFileName = newFileName || 'clear.txt';
    } else {
      console.error('Invalid operation. Use "encode" or "decode".');
      return;
    }

    await fs.writeFile(outputFileName, result);
    console.log(`Processed content saved to ${outputFileName}`);
  } catch (err) {
    console.error('Error processing file:', err);
  }
}

processFile();