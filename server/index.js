const { createServer } = require('http');

const server = createServer((request, response) => {
  console.log(request.url);
  response.end('Hello Client!!');
});

server.listen(8080, () => console.log('server is listening'));
