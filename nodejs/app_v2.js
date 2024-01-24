const http = require('http');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function greetUser(fname, lname) {
  return `Welcome, ${fname} ${lname}!`;
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    rl.question('Enter your first name: ', (fname) => {
      rl.question('Enter your last name: ', (lname) => {
        const welcomeMessage = greetUser(fname, lname);

        // Log user information to log.txt
        const logEntry = `${fname} ${lname} - ${new Date().toLocaleString()}\n`;
        fs.appendFile('log.txt', logEntry, (err) => {
          if (err) {
            console.error('Error writing to log.txt:', err);
          }
        });

        res.end(welcomeMessage);
        rl.close();
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Create or reset log.txt when the server starts
fs.writeFile('log.txt', '', (err) => {
  if (err) {
    console.error('Error creating/resetting log.txt:', err);
  } else {
    const port = 3000;
    server.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  }
});
