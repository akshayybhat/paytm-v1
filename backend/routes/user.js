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
    }

    // const userExist = await User.findOne("")

})




module.exports = router;