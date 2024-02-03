import fs from 'fs/promises';

if (process.argv.length < 3) {
  console.error('Please provide a directory path.');
  process.exit(1);
}

const directoryPath = process.argv[2];

fs.readdir(directoryPath)
  .then((files) => {
    const jsonFiles = files.filter((file) => file.endsWith('.json'));

    const guestNames = jsonFiles.map((jsonFile) => {
      const [firstname, lastname] = jsonFile.split('.')[0].split('_');
      return `${lastname} ${firstname}`;
    });

    guestNames.sort();

    guestNames.forEach((guest, index) => {
      console.log(`${index + 1}. ${guest}`);
    });
  })
  .catch((err) => console.error(`Error reading directory: ${err}`));