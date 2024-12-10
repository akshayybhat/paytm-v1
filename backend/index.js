const express = require("express");
const  rootRouter = require("./routes/index");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000,(req, res)=>{
    console.log("Server started on port 3000");
})


