const express = require('express');
const router = express.Router();
const userRouter = require("./user");
const app = express();

//testing route
router.get("/rtest", (req, res)=>{
    console.log("works");
})

router.use("/user", userRouter);



module.exports = router;

