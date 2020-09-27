const Ws = require("ws");
//This creates a Websocket Server.
const wss = new Ws.Server({ port: 3000 });
//This Function handles every connection made to the server  from any client.
wss.on("connection", function(res) {
    console.log("new User");
    //this handles every message sent to the server, parses it into an object and sends it any other client connected to the server.
    res.on("message", function(evt) {
        console.log(JSON.parse(evt));
        console.log(typeof evt)
        wss.clients.forEach(function each(client) {
            if (client !== res && client.readyState === Ws.OPEN) {
                client.send(evt);
            }
        });
    });

});