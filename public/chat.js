var socket = io.connect('http://localhost:4000')

var message = document.getElementById('message');
var button = document.getElementById('send');
var username = document.getElementById('username');
var output = document.getElementById('output');


button.addEventListener('click' , ()=> {
	socket.emit('sendMessage' , {username: username.value , message: message.value})
})

socket.on('broadcastMessage' , (data)=> {
	console.log(data);
	output.innerHTML += '<p><b>' + data.username + ':</b>'  + data.message + '</p>'
})