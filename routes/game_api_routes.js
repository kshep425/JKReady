// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const express = require("express");
const app = express();
const db_queries = require("../config/db_queries")

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

function get_user_score(id) {
    return db.Scores.findOne(
        {
            where:
            {
                UserId: id
            },
            include: db.Users
        }
    )
}

function increment_user_score(id, score) {
    return db.Scores.increment(
        {
            score: score,
        },
        {
            where: {
                UserId: id
            }
        }
    )
}

function get_all_scores(){
    return db.Scores.findAll({
        include: [db.Users],
        limit: 10
    })
}

function get_progress_table() {
    return db.Progress.findAll({})
}

function get_question_by_id(progress_id) {
    return db.Progress.findOne({
        where: {
            id: progress_id
        }
    })
}

function get_user_data(user_id) {
    db.Users.findOne({
        where: {
            id: user_id,
        },
        include: [db.Progress]
    })
}

function must_login() {
    const m = { type: "Error", message: "User must login or create account" }
    console.log(m.message)
    return m;
}

function add_question(params){
    console.log("create questions with these params:")
    console.log(params)
    return db.Progress.create(params)
}

module.exports = function (app) {

    // Get User Score
    app.get("/api/user_score", function (req, res) {
        console.log("Get User Score")
        // console.log(!req.user)
        if (req.user) {
            get_user_score(req.user.id)
                .then(function (scores) {
                    res.json({
                        score: scores.score
                    })
                })
        }
        else {
            res.json(must_login())
        }
    })

    // Update User Score
    app.put("/api/user_score", function (req, res) {
        console.log("API Put User Score")
        if (req.user) {
            console.log(`Increment score by ${req.body.score}`)
            increment_user_score(req.user.id, req.body.score)
                .then(() => {
                    get_user_score(req.user.id)
                        .then(function (scores) {
                            res.json({
                                score: scores.score
                            })
                        })
                })

        } else {
            res.json(must_login())
        }
    })

    //Get all user scores
    app.get("/api/scores", function (req, res) {
        console.log("Get all scores");
        if (req.user) {
            get_all_scores()
                .then(function (scores) {

                    let s = scores.map(score => {
                        return {
                            username: score.User.username,
                            score: score.score
                        }
                    })
                    res.json(s)
                })
        } else {
            res.json(must_login())
        }
    })

    // Get Progress info
    app.get("/api/questions", function (req, res) {
        console.log("Get all questions from progresses table")
        get_progress_table()
            .then(function (result) {
                if (result) {
                    console.log(result)
                    res.json(result)
                } else {
                    console.log("Questions Do Not Exist")
                    res.json({ type: "Error", message: "Questions Do Not Exist" })
                }
            })
    })

    // Get a question based on progress id
    app.get("/api/questions/:id", function (req, res) {
        console.log("Get question based on progress id")
        get_question_by_id(req.params.id)
            .then(function (result) {
                if (result) {
                    console.log(result)
                    res.json(result)

                } else {
                    console.log("Question ID does not Exist")
                    res.json({ type: "Error", message: "Question ID Does not Exist" })
                }
            })
    })

    // Set information for a user
    // * The progress id represents the question they are currently on
    app.put("/api/user_data", function (req, res) {
        console.log("Update user's information")
        if (req.user) {

            db.Users.update(req.body, {
                where: { id: req.user.id }
            }).then(function (result) {
                console.log(result)
                get_user_score(req.user.id)
                    .then(function (scores) {
                        res.json({
                            username: req.user.username,
                            id: req.user.id,
                            ProgressId: req.user.ProgressId,
                            score: scores.score
                        });
                    })
            })
        } else {
            console.log(must_login().message)
            res.json(must_login())
        }
    })
    app.get("/api/user_data", function (req, res) {
        console.log("Get user's information")
        if (req.user) {
            get_user_score(req.user.id)
                .then(function (scores) {
                    res.json({
                        username: req.user.username,
                        id: req.user.id,
                        ProgressId: req.user.ProgressId,
                        score: scores.score
                    });
                })
        } else {
            res.json(must_login())
        }
    })

    app.post("/api/question", function(req, res){
        console.log("Add Question to db")
        // if (req.user){
            add_question(req.body)
            .then(function(result){
                console.log(result)
                res.json(result)
            })
        // } else {
        //     res.json(must_login())
        // }
    });

}
