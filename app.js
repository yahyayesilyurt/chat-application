const express = require("express");
const app = express();
require("./db/db");
const messageRouter = require("./routers/messageRouter");
const Message = require("./model/model");



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/messages",messageRouter);
app.use(express.static(__dirname));





const http = require("http").Server(app);
const io = require('socket.io')(http);


io.on('connection', () => {
    console.log("a user is connected");
});

app.post("/messages", (req,res) => {
    let message = new Message(req.body);
    message.save((err) => {
        if(err){
            res.sendStatus(500);
        }else{
            io.emit('message', req.body);
            res.sendStatus(200);
        }
    });
});


const server = http.listen(3000, () => {
    console.log('server is running on port ', server.address().port);
});