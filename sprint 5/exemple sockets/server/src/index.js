const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

// inicialitzaci√≥ server de Socket.io
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// establint una connexi√≥ amb un client
io.on("connection", (socket) => {

  // saluda al client cada 5 segons
  setInterval(() => socket.emit("hello", "server li diu hello al client"), 5000);

  // escolta els events del client
  socket.on("howareyou", (arg) => {
    console.log(arg);
  });

});

server.listen(3000, () => {
  console.log('listening on port:3000');
});