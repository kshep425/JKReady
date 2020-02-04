const path = require("path");
var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req,res){
        console.log("Open Homepage");
        if (req.user) {
            console.log("You are logged in as: " + req.user.username)
            res.sendFile(path.join(__dirname, "/../public/assets/index.html"))
        } else {
            console.log("You need to login")
            res.sendFile(path.join(__dirname, "/../public/assets/login.html"))
        }

    })

    app.get("/scores", function (req,res){
        console.log("Open High Scores Page")
        if (req.user) {
            console.log("You are logged in as: " + req.user.username)
            let high_scores = {scores: [{username: "test_username", score: "0"}]}
            console.log(high_scores)
            res.render("index", high_scores)
        } else {
            console.log("You need to login")
            res.sendFile(path.join(__dirname, "/../public/assets/login.html"))
        }

    })
    app.get("/game", function (req,res){
        console.log("Open Game Page")
        if (req.user) {
            console.log("You are logged in as: " + req.user.username)
            let questions = {progress: [{question: "test_question", correct_answer: "Yes",wrong_answer_1:"No",wrong_asnwer_2:"Maybe"}]}
            console.log(questions)
            res.render("progress", questions)
        } else {
            console.log("You need to login")
            res.render("index")
        }

    })
    

}