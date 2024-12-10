const mongoose = require ('mongoose');


mongoose.connect("mongodb://localhost:27017/paytm").then(()=>{
    console.log("connected to mongodb");
});

// define schema for User model
const userSchema = new mongoose.Schema({
    userName : {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
})

const User = mongoose.model("User", userSchema);


module.exports = User;