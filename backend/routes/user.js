const express = require('express');
const router = express.Router();
const zod = require("zod");
const User = require("../db/main");

// testing route
router.get("/rtestuser", ()=>{
    console.log("works")
})

// signup route
router.post("/signup", async (req, res)=>{


    // zod validation
    const newUser = zod.object({
        username: zod.string().email().trim(),
        firstname: zod.string().max(15).trim(),
        lastname: zod.string().max(10).trim(),
        password: zod.string().trim().min(6),
    })

    if (!(newUser.safeParse(req.body)).success){
        res.status(411).json({
            message: " Incorrect inputs"
        })
        return;
    }

    // validation-checks if user entry already exists
    const {username} = req.body

    const userExist = await User.findOne({userName:username});
    if (userExist) {
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
        return;
    }

    // create a user entry to db
    try {
        await User.create({
            userName: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        })
        res.status(200).json({
            message: "User created successfully"
        })
    }catch(error){
        console.log("Error while creating User")
        console.log(error);
    }

})




module.exports = router;