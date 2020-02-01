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

// For player number
let i = 1;

module.exports = function (app) {

    // Get User Score
    app.get("/api/user_score", function (req, res) {
        console.log("Get User Score")
        // console.log(!req.user)
        if (req.user) {
            db.Scores.findOne({
                where: {
                    UserId: req.user.id
                },
                include: db.Users
            }).then(function (scores) {
                res.json({
                    score: scores.score
                })
            })
        }
        else {
            res.send("Login or Create an Account")
            //res.redirect(307,"/api/login")
        } // if req.user doesn't exist
    })

    // Update User Score
    app.put("/api/user_score", function(req, res){
        console.log("API Put User Score")
        if (req.user) {
            console.log(`Increment score by ${req.body.score}`)
            db.Scores.increment(
                {
                    score:  req.body.score,
                 }, {
                    where: {
                        UserId: req.user.id
                    }
                }
            ).then((response)=>{
                console.log(response.dataValues);
                res.send("Score Updated")
            })
        } else {
            res.send("Login or Create an Account")
        }

    })


}



    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    // app.post("/api/signup", function (req, res) {
    //     db.Users.create({
    //         username: req.body.username,
    //         password: req.body.password
    //     })
    //     .then(function () {
    //         res.redirect(307, "/api/login");
    //     })
    //     .catch(function (err) {
    //         res.status(401).json(err);
    //     });
    // });

    // // Route for logging user out
    // app.get("/logout", function (req, res) {
    //     req.logout();
    //     res.redirect(307, "/api/login");
    // });

    // // Route for getting some data about our user to be used client side
    // app.get("/api/user_data", function (req, res) {
    //     if (!req.user) {
    //         // The user is not logged in, send back an empty object
    //         res.json({});
    //     } else {
    //         // Otherwise send back the user's username and id
    //         // Sending back a password, even a hashed password, isn't a good idea
    //         res.json({
    //             username: req.user.username,
    //             id: req.user.id
    //         });
    //     }
    // });
//}

// module.exports = app