const jsonwebtokens = require("jsonwebtoken");
const {jwt_secret} = require("./config");

const authMiddleware = (req, res, next)=>{
    const jwt = req.headers.authorization;
    console.log(jwt);
    if (!(jwt || jwt.startsWith("Bearer"))){
        res.status(403).json({
            message: "Incorrect Inputs"
        })
        return;
    }
    const token = jwt.split(" ")[1];
    try{
        const decoded = jsonwebtokens.verify(token, jwt_secret);
        req.userId = decoded;
        next();
    }catch(error){
        res.status(403).json({
            message: "Incorrect Inputs"
        })
    }

}
module.exports={authMiddleware}