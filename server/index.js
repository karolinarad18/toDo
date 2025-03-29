const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require('./models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt');
const app = express()
const cookieParser =require('cookie-parser');
app.use(express.json())
app.use(cors())
app.use(cookieParser())

mongoose.connect("mongodb://127.0.0.1:27017/toDo");
app.post('/register', (req,res)=>{
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post("/login", (req,res)=>{
    const {username,password} = req.body;
    userModel.findOne({username:username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.listen(3001, () => {
    console.log("server is running")
})