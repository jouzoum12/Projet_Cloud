import http from 'http';
import { getSystemInfo } from './sysinfo';

export function startServer() {
  const hostname = 'localhost';
  const port = 8000;

  const requestListener = async (req: http.IncomingMessage, response: http.ServerResponse) => {
    if (req.url === '/api/v1/sysinfo') {
      const result = await getSystemInfo();

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(result));
      response.end();
    } else {
      response.writeHead(404);
      response.end('Not Found');
    }
  };

  const server = http.createServer(requestListener);

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
  });
}