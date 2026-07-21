const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userSchema")

const resetPass = async(req,res) => {
    try{
        const {token} = req.params;

        const {password} = req.body;

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET_KEY
        )

        const hashPassword = await bcrypt.hash(password, 10)

        await User.findByIdAndUpdate(
            decoded.id,
            {
                password: hashPassword
            }
        )

        res.status(200).json({message: "Password updated successfully"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Invalid or Expired Token"})
    }
}

module.exports = resetPass