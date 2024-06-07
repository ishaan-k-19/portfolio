const bodyparser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const mongoose = require('mongoose')
const Form = require('./models/Form')
dotenv.config();
const app = express();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log("MongoDB Connected")
    } catch {
        console.error(error.message);
        process.exit(1);
    }
}

connectDB()
app.use(cors())
app.use(bodyparser.json())
port = process.env.PORT

app.post('/submit', async (req, res) => {
    const newForm = await Form.create({
        first_name: req.body.fname,
        last_name: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    })
    const savedForm = await newForm.save();
    res.json(savedForm)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})