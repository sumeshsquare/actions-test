const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  const name = process.argv[2] || 'World';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${name}!\n`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

