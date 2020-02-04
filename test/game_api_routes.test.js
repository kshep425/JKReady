const request = require("supertest")
// const app = require("../server")
const db = require("../models")
const { Op } = require("sequelize");

const express = require("express");
const session = require("express-session");
const passport = require("../config/passport");
const initialize_connection = require("../config/db_connection");
const db_obj = require("../config/db_config")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
require("../routes/game_api_routes")(app)
require("../routes/login_api_routes")(app)
require("../routes/index_routes")(app)

let i = 5000;

// console.log(db_obj)
describe("Game Tests", () => {

    beforeAll((cb) => {

        initialize_connection(db_obj);
        db.Users.destroy({
            where: {
                username: { [Op.startsWith]: 'test' }
            }
        }).then(function () {
            console.log('Removed test users')
            cb()
        }).catch(function (err) {
            console.log(err)
            cb()
        })

    })

    beforeEach(() => {
        // i = Math.floor((Math.random() + 1) * 1000)
        i++;
    })

    describe("WHEN Not Logged IN", () => {

        it('GET /api/user_score/ should return "Login or Create Account" when not logged in', (done) => {

            request(app)
                .get("/api/user_score")
                .expect(200, /{"type":"Error","message":"User must login or create account"}/, done);

        });

        it('PUT /api/user_score/ should return "Login or Create Account" when not logged in', (done) => {
            request(app)
                .get("/api/logout")
                .expect(200, function () {
                    request(app)
                        .put("/api/user_score")
                        .send({ score: 5 })
                        .expect(200, /{"type":"Error","message":"User must login or create account"}/, done)
                })
        })
    })

    // describe("WHEN account created", () => {

    it('GET /api/user_score/ should return current users score', (done) => {
        const username = "test_user_" + i
        console.log(username)
        const password = "password_" + i
        // Signup and login a new user


        request(app)
            .post("/api/signup")
            .send({ username: username, password: password })
            .expect(307,
                function (err, res) {
                    if (err) throw err;


                    request(app)
                        .post("/api/login")
                        .send({ username: username, password: password })
                        .expect(200,
                            function () {
                                request(app)
                                    .get("/api/user_score")
                                    .expect(200, /{ score: 0 }/, done)
                            }
                        )
                })
    })

    //     it('PUT /api/user_score/ should increment current user\'s score by 5 when logged in', (done) => {
    //         request(app)
    //             .put("/api/user_score")
    //             .send({ score: 5 })
    //             .expect(200, function () {
    //                 request(app)
    //                 .get("/api/user_score")
    //                 .expect(200, /{ score: 5 }/, done)
    //             })
    //     })
    // })




}); // describe
