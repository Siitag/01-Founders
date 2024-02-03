import fs from 'fs/promises';
import path from 'path';

async function countEntries(directoryPath) {
  try {
    const dir = directoryPath || './';
    const entries = await fs.readdir(dir);
    console.log(entries.length);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const directoryPath = process.argv[2];
countEntries(directoryPath);
