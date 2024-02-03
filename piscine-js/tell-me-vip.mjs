import fs from 'fs';
import path from 'path';
const directory = process.argv[2] || process.cwd();
function getVIPGuests(dir) {
    const vipGuests = [];
    try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const fileStat = fs.statSync(filePath);
            if (fileStat.isFile()) {
                const content = fs.readFileSync(filePath, 'utf8');
                const response = JSON.parse(content); // Parse the JSON content
                if (response.answer.toLowerCase() === 'yes') {
                    const [firstname, lastname] = file.split('.')[0].split('_');
                    vipGuests.push(`${lastname} ${firstname}`);
                }
            }
        });
    } catch (err) {
        console.error('Error processing directory:', err);
    }
    return vipGuests.sort();
}
const vipList = getVIPGuests(directory);
const formattedList = vipList.map((name, index) => `${index + 1}. ${name}`).join('\n');
// Save to vip.txt
fs.writeFileSync('vip.txt', formattedList);
console.log('VIP list saved to vip.txt');
