const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginLogic = async(req,res) => {
    try{
        const {email, password} = req.body;
    
        if(!email || !password){
            return res.status(400).json({message: "All fields are mandatory"});
        }
    
        const userEmail = await User.findOne({email});
    
        if(!userEmail){
            return res.status(400).json({message: "User does not exist."});
        }
    
        const isMatch = await bcrypt.compare(
            password,
            userEmail.password
        )

        if(!isMatch){
            return res.status(400).json({message: "Incorrect email or Password"});
        }
    
        const token = jwt.sign(
            {email},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "1h"}
        )
    
        res.status(200).json({message: "User is successfully login.", token})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = loginLogic