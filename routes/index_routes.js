
const path = require("path");
const db_queries = require("../config/db_queries")
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

    app.get("/scores", async function (req, res) {
        console.log("Open High Scores Page")
        if (req.user) {
            //console.log(app)
            console.log("You are logged in as: " + req.user.username)
            db_queries.get_all_scores()
                .then(function(scores){
                    console.log('SCORE!!!')
                    console.log(scores)
                    let s = scores.map(score => {
                        return {
                            username: score.User.username,
                            score: score.score
                        }
                    })
                    console.log("Mapped Scores")
                    let high_scores = {scores: s}
                    console.log(high_scores)
                    res.render("high_scores", { scores: [ { username: 'newuser1', score: 0 } ] })
                })

        } else {
            console.log("You need to login")
            res.render("index")
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
            res.render("intro", {username: req.body.username})
        } else {
            console.log("You need to login")
            res.render("index")
        }

    })

    app.get("/game", function (req, res) {
        console.log("Start Game and display game board")
        res.render("progress")
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