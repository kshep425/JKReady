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
require("../routes/login_api_routes")(app)
let i = 1000;
// console.log(db_obj)
describe("Login Tests", () => {
    beforeAll((cb)=>{
        initialize_connection(db_obj);
        cb();
    })

    beforeEach(()=>{
        // i = Math.floor((Math.random() + 1) * 1000)
        i++;
    })

    it('/api/login/ returns "401 unauthorized" for unknown user login', (done) => {
        request(app)
        .post("/api/login")
        .send({username: "unknown", password: "unknown"})
        .expect(401, done)
    })


    it('/api/signup/ allows new user to be created',(done)=>{
        const username = "new_user_" + i
        console.log(username)
        const password = "password_" + i
        request(app)
        .post("/api/signup")
        .send({username: username, password: password})
        .expect(307, done)
    })

    it('/api/signup/ does not allow duplicate users to be created', (done)=>{
        const username = "new_user_" + i
        console.log(username)
        const password = "password_" + i
        request(app)
        .post("/api/signup")
        .send({username: username, password: password})
        .expect(307, function(err, res){
            if (err) throw err;

            request(app)
            .post("/api/signup")
            .send({username: username, password: password})
            .expect(401,/"username must be unique"/,done)
        })
    })

    it('/api/login/ allows user to login', (done)=>{
        const username = "new_user_" + i
        console.log(username)
        const password = "password_" + i
        request(app)
        .post("/api/signup")
        .send({username: username, password: password})
        .expect(307, function(err, res){
            if (err) throw err;

            request(app)
            .post("/api/login")
            .send({username: username, password: password})
            .expect(200,done)
        })
    })

    it('/api/login/ allows user to login and logout', (done)=>{
        const username = "new_user_" + i
        console.log(username)
        const password = "password_" + i
        request(app)
        .post("/api/signup")
        .send({username: username, password: password})
        .expect(307, function(err, res){
            if (err) throw err;

            request(app)
            .post("/api/login")
            .send({username: username, password: password})
            .expect(200, function(err, res){
                if (err) throw err;

                request(app)
                .get("/api/logout")
                .expect(404,done)
            })
        })
    })


}); // describe
