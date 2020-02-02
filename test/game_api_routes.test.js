const request = require("supertest")
const express = require("express");
const session = require("express-session");
const passport = require("../config/passport");
const initialize_connection = require("../config/db_connection");
const db_obj = require("../config/db_config")
const serialize = initialize_connection(db_obj);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
require("../routes/game_api_routes")(app)
require("../routes/login_api_routes")(app)
let i = 2000;
// console.log(db_obj)
describe("Game Tests", () => {
    beforeAll((cb) => {
        initialize_connection(db_obj);
        cb();
    })

    beforeEach(() => {
        // i = Math.floor((Math.random() + 1) * 1000)
        i++;
    })

    describe("WHEN Not Logged IN", () => {

        it('GET /api/user_score/ should return "Login or Create Account" when not logged in', (done) => {
            request(app)
                .get("/api/user_score")
                .expect(200, /Login or Create an Account/, done)
        })

        it('PUT /api/user_score/ should return "Login or Create Account" when not logged in', (done) => {
            request(app)
                .put("/api/user_score")
                .send({ score: 5 })
                .expect(200, /Login or Create an Account/, done)
        })
    })

    // describe("WHEN account created", () => {

    //     it('GET /api/user_score/ should return current users score', (done) => {
    //         const username = "new_user_" + i
    //         console.log(username)
    //         const password = "password_" + i
    //         // Signup and login a new user
    //         request(app)
    //             .post("/api/signup")
    //             .send({ username: username, password: password })
    //             .expect(307, function (err, res) {
    //                 if (err) throw err;

    //                 request(app)
    //                     .post("/api/login")
    //                     .send({ username: username, password: password })
    //                     .expect(200, function(){
    //                         request(app)
    //                         .get("/api/user_score")
    //                         .expect(200, /{ score: 0 }/, done)

    //                     })
    //             })

    //     })

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
