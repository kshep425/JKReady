// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const express = require("express");
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
module.exports = function(app){

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        db.Users.create({
            username: req.body.username,
            password: req.body.password
        }).then(function(users_response){
            console.log(users_response.dataValues.id)
            db.Scores.create({
                score: 0,
                UserId: users_response.dataValues.id
            })
        })
        .then(function () {
            res.redirect(307, "/api/login");
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
    });

    // Route for logging user out
    app.get("/api/logout", function (req, res) {
        req.logout();
        res.send("You have logged out")
        //res.redirect(307, "/api/login");
    });

}
