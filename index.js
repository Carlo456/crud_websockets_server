import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io'; 

//import config
import { server_config } from './config.js';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

server.listen(server_config.PORT,() => {
    console.log(`Server on port: ${server_config.PORT}`)
});