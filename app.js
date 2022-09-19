//jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
  }));

//Set static path
app.use(express.static("public"));

app.get("/users", function(req, res){
    let users = [
        {
            first_name: "John",
            last_name: "Doe",
            age: 34,
            gender: "male"
        },
        {
            first_name: "Tom",
            last_name: "Jackson",
            age: 23,
            gender: "male"
        },
        {
            first_name: "Tracy",
            last_name: "Smith",
            age: 38,
            gender: "female"
        }
    ];
    res.json(users);
});

app.post("/subscribe", function(req, res){
    let name = req.body.name;
    let email = req.body.email;

    console.log(name + " has subscribed with " + email);
    res.redirect("index.html");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});