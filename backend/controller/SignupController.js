const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupLogic = async (req,res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are mandatory"});
        }

        const userEmail = await User.findOne({email});

        if(userEmail){
            return res.status(400).json({message: "User is already registered"});
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const token = jwt.sign(
            {email},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "1h"}
        )

        const newUser = new User({
            name,
            email,
            password: hashPassword,
        })

        await newUser.save();

        res.status(201).json({message: "User is successfully registered", newUser, token})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = signupLogic