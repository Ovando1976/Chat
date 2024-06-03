const http = require('http');
const WebSocket = require('ws');
const express = require('express');
const path = require('path');
const auth = require('./auth');
const document = require('./document');
const tour = require('./tour');
const rideshare = require('./rideshare');
const food = require('./food');
const events = require('./events');
const hotels = require('./hotels');
const flights = require('./flights');
const boats = require('./boats');
const knowledge = require('./knowledge');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Initialize features
auth.initialize(app);
document.initialize(app, wss);
tour.initialize(app);
rideshare.initialize(app);
food.initialize(app);
events.initialize(app);
hotels.initialize(app);
flights.initialize(app);
boats.initialize(app);
knowledge.initialize(app);

wss.on('connection', (ws) => {
  console.log('A new client connected');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    // Handle signaling for WebRTC
    if (data.type === 'signal') {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    } else {
      // Broadcast the message to all clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
