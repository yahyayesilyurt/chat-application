const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost/chatapp";
mongoose.connect(dbUrl)
.then(() => console.log("Database connection successful"))
.catch(error => console.log("Database error: "+ error.message));