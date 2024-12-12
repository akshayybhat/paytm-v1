const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware")
const {User,Accounts} = require("../db/main");
const zod = require("zod");

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



})


module.exports = router;