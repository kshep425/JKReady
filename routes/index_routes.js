const path = require("path");
const db_queries = require("../config/db_queries")
const game_questions = require("../config/game")
var db = require("../models");
module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log("Open Homepage");
        if (req.user) {
            console.log("You are logged in as: " + req.user.username)
            res.render("index", { username: req.user.username })
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
        req.logout();
        res.render("index");
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
            db_queries.add_questions(game_questions)
                .then(function () {
                    console.log("Updated the questions table")

                    db.Users.findOne({ where: { id: req.user.id } })
                        .then(function (user) {
                            console.log(req.user);
                            console.log(user)
                            db_queries.get_question_by_id(req.user.ProgressId || 1)
                                .then(function (result) {

                                    const progress = {
                                        question: result.question,

                                        correct_answer: result.correct_answer,
                                        correct_response: result.correct_response,
                                        correct_img: result.correct_img,

                                        wrong_answer_1: result.wrong_answer_1,
                                        wrong_response_1: result.wrong_response_1,

                                        wrong_answer_2: result.wrong_answer_2,
                                        wrong_response_2: result.wrong_response_2,

                                        points: result.points,

                                        prev_question_id: result.prev_question_id,

                                        next_question_id: result.next_question_id,

                                        stage: result.stage,

                                        start_img: result.start_img
                                    }

                                    res.render("progress", progress)
                                }).catch(err => console.log(err))
                        })
                })

        } else {
            console.log("You need to login")
            res.render("index")
        }
    })

    app.get("/game/:id", function (req, res) {
        console.log("Display Game Question #" + req.params.id)
        if (req.user) {
            db_queries.get_question_by_id(req.params.id || 1)
                .then(function (result) {
                    console.log(result)
                    const progress = {
                        question: result.question,

                        correct_answer: result.correct_answer,
                        correct_response: result.correct_response,
                        correct_img: result.correct_img,

                        wrong_answer_1: result.wrong_answer_1,
                        wrong_response_1: result.wrong_response_1,

                        wrong_answer_2: result.wrong_answer_2,
                        wrong_response_2: result.wrong_response_2,

                        points: result.points,

                        prev_question_id: result.prev_question_id,

                        next_question_id: result.next_question_id,

                        stage: result.stage,

                        start_img: result.start_img
                    }

                    res.render("progress", progress)
                }).catch(err => console.log(err))


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
