const path = require("path");
const db_queries = require("../config/db_queries")
module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log("Open Homepage");
        if (req.user) {
            console.log("You are logged in as: " + req.user.username)
            res.render("index", { username: username })
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
                .then(function (scores) {
                    console.log('SCORE!!!')
                    console.log(scores)
                    let s = scores.map(score => {
                        return {
                            username: score.User.username,
                            score: score.score
                        }
                    })
                    console.log("Mapped Scores")
                    let high_scores = { scores: s }
                    console.log(high_scores)
                    res.render("high_scores", high_scores)
                })
                .catch(function (err) {
                    console.log("Could Not Get Scores")
                    console.log(err)
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
        req.logout()
        res.render("index")
    })

    app.get("/intro", function (req, res) {
        console.log("Start Game Introduction")
        if (req.user) {
            res.render("intro", { username: req.body.username })
        } else {
            console.log("You need to login")
            res.render("index")
        }

    })

    app.get("/game", function (req, res) {
        console.log("Start Game and display game board")
        if (req.user) {
            db_queries.get_progress_table()
                .then(function (result) {
                    const progress = result.map(function (res) {
                        return {
                            question: res.question,
                            correct_answer: res.correct_answer,
                            wrong_answer_1: res.wrong_answer_1,
                            wrong_answer_2: res.wrong_answer_2,
                            points: res.points,
                            prev_question_id: res.prev_question_id,
                            next_question_id: res.next_question_id,
                            stage: res.stage

                        }
                    })

                    res.render("progress", { progress: progress })
                })
        } else {
            console.log("You need to login")
            res.render("index")
        }
    })

    app.get("/contact", function (req, res) {
        console.log("Display contact us form")
        if (req.user) {
            res.render("contact")
        } else {
            console.log("You need to login")
            res.render("index")
        }
    })

    app.get("/instructions", function (req, res) {
        console.log("Display Instructions")
    })

    app.get("/gameover", function (req, res) {
        console.log("Game Over")
    })

}
