import http from 'http';
import { v4 as uuidv4 } from 'uuid';


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.write('<html><body><h1>Welcome!!</h1><p>This is the default page.</p></body></html>');
        res.end();
      } else if (req.url === '/student') {
        res.write('<html><body><h1>Student Information</h1><p>Student name: Your name</p><p>Student lastname: Your lastname</p><p> Academy: The academy you are at</p><p>Subject: The subject you are learning now </p></body></html>');
        res.end();
      } else {
        res.statusCode = (404);
        res.write('<html><body><h1>404 Not Found</h1></body></html>');
        res.end();
      }
    });
    
    server.listen(3000, () => {
      console.log('The server is up and running on port 3000, ready to receive requests.');
    });