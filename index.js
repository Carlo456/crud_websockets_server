import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io'; 

//import config
import { server_config } from './config.js';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: "*"
});

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket}`);

    socket.on('message', (data) => {
        const responseMessage = {
            body: data,
            from: socket.id,
        };
        socket.broadcast.emit('responseMessage', responseMessage);
    });
});

server.listen(server_config.PORT,() => {
    console.log(`Server on port: ${server_config.PORT}`)
});