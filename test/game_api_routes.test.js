const request = require("supertest")
const app = require("../server")
let i = 2000;

describe("Game Tests", () => {
    beforeEach(() => {
        i++;
    })

    // afterAll(async (cb)=>{
    //     await app.close()
    //     await console.log("Game Route - App Closed")
    //     await cb()
    // })

    describe("WHEN Not Logged IN", () => {

        it('GET /api/user_score/ should return "Login or Create Account" when not logged in', (done) => {
            request(app)
                .get("/api/user_score")
                .expect(200, /{"type":"Error","message":"User must login or create account"}/, done)
        })

        it('PUT /api/user_score/ should return "Login or Create Account" when not logged in', (done) => {
            request(app)
                .put("/api/user_score")
                .send({ score: 5 })
                .expect(200, /{"type":"Error","message":"User must login or create account"}/, done)
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
