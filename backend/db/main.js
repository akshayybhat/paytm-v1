const mongoose = require ('mongoose');


mongoose.connect("mongodb://localhost:27017/paytm").then(()=>{
    console.log("connected to mongodb");
});

// define schema for User model
const userSchema = new mongoose.Schema({
    userName : {type: String, required: true,},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: String,
})

const User = mongoose.model("User", userSchema)

const accountSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: User, required: true},
    balance: {type:Number, required: true}
})

const Accounts = mongoose.model("Accounts", accountSchema);


module.exports = {User,Accounts};