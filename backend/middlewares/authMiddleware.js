const jwt = require("jsonwebtoken")

const authMiddleware = async(req,res,next) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(400).json({message: "Token not exist"});
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decoded;
        
        next();
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Something is wrong"})
    }
}

module.exports = authMiddleware