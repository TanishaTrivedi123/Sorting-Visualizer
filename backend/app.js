const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db")

const app = express();
db()

const PORT = process.env.PORT || 8000;

app.get("/", (req,res) => {
    res.send("Radhe Radhe. Jai shree krishn");
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
})