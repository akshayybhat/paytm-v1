const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware")
const {User,Accounts} = require("../db/main");
const zod = require("zod");
const mongoose = require ('mongoose');

router.get("/balance", authMiddleware, async(req, res)=>{
    const user = await User.findOne({userName:req.userId});
    const userBalance = await Accounts.findOne({userId: user._id});

    if (!userBalance){
        res.status(411).json({
            message: "Could not fetch the balance"
        })
        return;
    }
    res.status(200).json({
        balance: userBalance.balance
    })
})

router.post("/transfer", authMiddleware, async (req,res)=>{
    const transferRequestSchema = zod.object({
        to: zod.string(),
        amount: zod.number()
    })
    if (!(transferRequestSchema.safeParse(req.body)).success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }
    //getting the _id of the user

    const userId = await User.findOne({userName:req.userId});

    const userAccount = await Accounts.findOne({userId: userId._id});

    // validating from account
    if (!(userAccount|| userAccount.balance>req.body.amount)){
        res.status(400).json({
            message: "Insufficient balance"
        })
        return;
    }
    // validating to account
    const toAccount = await Accounts.findOne({userId:req.body.to});

    if (!toAccount){

        res.status(400).json({
            message: "Invalid account"
        });
        return;
    }

    // starting the session


    const session = await mongoose.startSession();
    session.startTransaction();

    await Accounts.updateOne({userId: userId._id}, {$inc:{balance:-req.body.amount}}).session(session);
    await Accounts.updateOne({userId: req.body.to}, {$inc:{balance:req.body.amount}}).session(session);

    await session.commitTransaction();
    res.status(200).json({
        message: "Transfer successful"
    })
})


module.exports = router;