import http from 'http';
import fs from 'fs';
import path from 'path';
const port = 5000;
const guestsDir = path.join(process.cwd(), 'guests'); // Use current working directory
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const guestName = req.url.substring(1); // Extract guest name from URL
        const filePath = path.join(guestsDir, `${guestName}.json`);
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.setHeader('Content-Type', 'application/json');
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'guest not found' }));
                } else {
                    res.writeHead(500);
                    res.end(JSON.stringify({ error: 'server failed' }));
                }
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });
    } else {
        res.writeHead(405);
        res.end(JSON.stringify({ error: 'method not allowed' }));
    }
});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
