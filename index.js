const express  = require('express');
const socket = require('socket.io');
const app = express();

const server = app.listen(4000 , () => {
	console.log('hii there!');
})

app.use(express.static('public'));

const upgradedServer = socket(server);

upgradedServer.on('connection' , (socket) => {

	socket.on('sendMessage' , (data)=> {
		console.log(data);
		upgradedServer.emit('broadcastMessage' , data);
	})

	console.log('connection establesh' , socket.id)
})