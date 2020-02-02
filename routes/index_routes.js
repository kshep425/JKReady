// Requiring our models and passport as we've configured it
const express = require("express");
const app = express();
const path = require("path");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error

// For player number
let i = 1;

module.exports = function (app) {
    app.get("/", function (req,res){
        console.log("Open Homepage");
        if (req.user) {
            console.log("You are logged in as:")
            console.log(req.user)
            res.sendFile(path.join(__dirname + "../public/assets/index.html"))
        } else {
            console.log("You need to login")
            res.sendFile(path.join(__dirname, "/../public/assets/index.html"))
        }

    })
}