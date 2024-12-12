const express = require('express');
const router = express.Router();
const userRouter = require("./user");
const accountRouter = require("./accounts");
const app = express();

//testing route
router.get("/rtest", (req, res)=>{
    console.log("works");
})

router.use("/user", userRouter);
router.use("/account", accountRouter);



module.exports = router;

