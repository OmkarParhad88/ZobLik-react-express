const mongoose = require('mongoose')
const express = require('express');
const userModel = require('./model/userModel');
const app = express();
const cors = require('cors');


app.use(express.json())
app.use(cors(
  {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  }
))


mongoose.connect("mongodb://localhost:27017/ziblik")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.post('/', (req, res) => {
  const { userName, email, password } = req.body
      userModel.create({ name: userName, email: email, password: password })
        .then((user) => res.json(user))
        .catch(err => res.json(err))
  

})

app.get("/home", (req, res) => {
  return res.json("Success")
})
app.listen(3001, () => {
  console.log("server is running.....3001")
})