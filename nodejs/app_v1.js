const http = require('http');
const readline = require('readline');

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
        res.end(welcomeMessage);

        rl.close(); // Close the interface after handling the request
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
