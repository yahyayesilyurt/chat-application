const mongoose = require("mongoose");

let Message = mongoose.model("Message", {name: String, message: String});

module.exports = Message;



