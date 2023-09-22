const express = require("express");
const model = require("./model/user");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/login")
  .then(() => {
    console.log("connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  model.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.send("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record exicted");
    }
  });
});

app.post("/register", (req, res) => {
  model
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`listen to on the port number ${port}`);
});
