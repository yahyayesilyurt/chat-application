const router = require("express").Router(); 
require("../db/db");
const Message = require("../model/model");



router.get("/messages", (req,res) => {
    Message.find({},(err,messages) => {
        res.send(messages);
    });
    
});

router.post("/messages",(req,res) => {
    let message = new Message(req.body);
    message.save((err) => {
        if(err){
            res.sendStatus(500);
        }else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;


