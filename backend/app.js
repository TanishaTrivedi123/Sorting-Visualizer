const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db")
const cors = require("cors")

const app = express();
db()

// middleware
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 8000;

// signup route
const signupRoute = require("./routes/SignRoute")
app.use("/api", signupRoute);

// login route
const loginRoute = require("./routes/LoginRoute")
app.use("/api", loginRoute);

// forgot password route
const forgotPassRoute = require("./routes/forgotPasswordRoute")
app.use("/api", forgotPassRoute)

// reset password route
const resetPassRoute = require("./routes/ResetPasswordRoute");
app.use("/api", resetPassRoute);

app.get("/", (req,res) => {
    res.send("Radhe Radhe. Jai shree krishn");
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})