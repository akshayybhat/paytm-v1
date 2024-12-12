const express = require('express');
const router = express.Router();
const zod = require("zod");
const {User,Accounts} = require("../db/main");
const {jwt_secret} = require("../config");
const jwt = require("jsonwebtoken")
const {authMiddleware} = require("../middleware")

const createJWT = (payload) =>{
    let token;
    token = jwt.sign(payload, jwt_secret);
    return token;
}

// signup route
router.post("/signup", async (req, res)=>{

    // zod validation
    const newUser = zod.object({
        userName: zod.string().email().trim(),
        password: zod.string().trim().min(6),
        firstname: zod.string().max(15).trim(),
        lastname: zod.string().max(10).trim(),
    })

    if (!(newUser.safeParse(req.body)).success){
        res.status(411).json({
            message: " Incorrect inputs"
        })
        return;
    }

    // validation-checks if user entry already exists
    const {userName} = req.body

    const userExist = await User.findOne({userName:userName});
    if (userExist) {
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
        return;
    }
    
    // create a user entry to db
    try {

        const user = await User.create({
            userName: req.body.userName,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        })
        const userId = user._id;

        await Accounts.create({
            userId: userId,
            balance: 1+Math.random() * 10000
        })

        res.status(200).json({
            message: "User created successfully",
            token: createJWT(userName)
        })
    }catch(error){
        console.log("Error while creating User")
        console.log(error);
    }
})

//sign-in route

router.post("/signin", async(req,res)=>{
    const userSchema = zod.object({
        userName: zod.string().email().trim(),
        password: zod.string().trim().min(6),
    })

    if (!(userSchema.safeParse(req.body)).success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }
    // if user already exists and creds match
    const user = await User.exists({userName: req.body.userName, password: req.body.password})
    if (user){
        res.status(200).json({
            token: createJWT(req.body.userName)
        });
    }else{
        res.status(411).json({
            message: "Error while logging in"
        })
    }
})

//update user details

router.put("/", authMiddleware, async (req, res)=>{
    const userDetailSchema = zod.object({
        password: zod.string().trim().min(6).optional(),
        firstname: zod.string().max(15).trim().optional(),
        lastname: zod.string().max(10).trim().optional(),
    })

    if (!(userDetailSchema.safeParse(req.body)).success){
        res.status(411).json({
            message: "Error while updating information"
        })
        return;
    }

    const userUpdate = await User.findOneAndUpdate({userName: req.userId}, {password: req.body.password, firstname: req.body.firstname, lastname: req.body.lastname});

    if (userUpdate){
        res.status(200).json({
            message: "Updated successfully"
        })
    }else{
        res.status(411).json({
            message: "Error while updating information"
        })
    }

})

router.get("/bulk", authMiddleware, async (req, res)=>{
    const userRequested = req.query.filter;
    let userDetails = [];
    let tempDetails = await User.find({$or:[{firstname: userRequested}, {lastname:userRequested}]});
    if (tempDetails){
        tempDetails.map((elements)=>{
            userDetails.push({firstname:elements.firstname, lastname:elements.lastname, _id:elements._id});
        })
    }
    res.status(200).json({
        message: {userDetails}
    })
})

module.exports = router;