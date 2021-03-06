/**
 * standalone node.js client for SNAKE AI testbench
 */

var io = require('socket.io-client'),

socket = io.connect('localhost', {
	    port: 1337
});

socket.on('connect', function () { 
	console.log("socket connected");
	socket.emit('start', null);
});

socket.on("broadcast", function(data) {
	console.log("received broadcast. echoing..");
	//socket.emit("msg", {data: "echo"});
});

socket.on("update", function(data) {
	console.log("received update: " + JSON.stringify(data));
});
	
