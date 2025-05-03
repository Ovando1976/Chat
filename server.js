// server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    // Broadcast to all, or handle room logic
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });
  ws.send(JSON.stringify({ message: "Welcome to the signaling server!" }));
});

console.log("Signaling server running on ws://localhost:8080");
