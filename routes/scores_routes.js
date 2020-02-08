app.get("/scores", function (req,res){
    console.log("Open High Scores Page")
    if (req.user) {
        console.log("You are logged in as: " + req.user.username)
        let high_scores = {scores: [{username: "test_username", score: "0"}]}
        console.log(high_scores)
        res.render("index", high_scores)
    } else {
        console.log("You need to login")
        res.render("index")
    }

})