
const path = require("path");
var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log("Open Homepage");
        if (req.user) {
            console.log("You are logged in as: " + req.user.username)
            res.render("index", {username: username})
        } else {
            console.log("You need to login")
            res.render("index")
        }

    })

    app.get("/scores", function (req, res) {
        console.log("Open High Scores Page")
        if (req.user) {
            console.log("You are logged in as: " + req.user.username)
            let high_scores = { scores: [{ username: "test_username", score: "0" }] }
            console.log(high_scores)
            res.render("index", high_scores)
        } else {
            console.log("You need to login")
            res.sendFile(path.join(__dirname, "/../public/assets/login.html"))
        }

    })

    app.get("/login", function (req, res) {
        console.log("Open Login Form")
        if (req.user) {
            console.log("You are logged in as: " + req.user.username)
            res.render("index")
        } else {
            console.log("You need to login")
            res.render("index")
        }
    })

    app.get("/logout", function (req, res) {
        console.log("User has logged out")
    })

    app.get("/intro", function (req, res) {
        console.log("Start Game Introduction")
        if(req.user){
            res.render("index", {username: req.body.username})
        } else {
            console.log("You need to login")
            res.render("index")
        }

    })

    app.get("/game", function (req, res) {
        console.log("Start Game and display game board")
    })

    app.get("/contact", function (req, res) {
        console.log("Display contact us form")
    })

    app.get("/instructions", function (req, res) {
        console.log("Display Instructions")
    })

    app.get("/gameover", function (req, res) {
        console.log("Game Over")
    })

}