$(document).ready(function () {
    let intro_form = $("#intro_form");

    intro_form.on("submit", function (event) {
        event.preventDefault();
        console.log("Start Game by getting questions")
        window.location.replace("/game")
        playAudio();
    })
    function play_audio() {
        var audio = document.getElementById("audio");
        audio.play();
    }

    $("#correct_answer").click(function (event) {
        event.preventDefault();
        console.log("correct answer clicked");
        let next_id = $("#next_question_id").attr("data-next_question_id")
        let response = $("#correct_answer").attr("data-response")
        display_response(response);
        console.log(next_id);
        update_world()
            .then(function () {

                $.ajax({
                    url: "/api/user_data",
                    type: 'PUT',
                    data: { ProgressId: next_id || 1 },
                    success: function () {
                        $.ajax({
                            url: "/api/user_score",
                            type: 'PUT',
                            data: {
                                score: 5
                            }
                        })
                        console.log("next_id: " + next_id)
                        if (next_id) {
                            window.location.replace("/game/" + next_id);
                        } else {
                            console.log("Game Over")
                            game_over();
                        }
                    }
                })
            })
    })

    $(".wrong").click(function (event) {
        event.preventDefault();
        console.log($(this))

        $(".container").effect("shake", {}, 500, function () {
            //add sound
            console.log("WRONG ANSWER!!!!")
        });

        let response = $(event.currentTarget).data("response")
        console.log(response)
        display_response(response);


        $.ajax({
            url: "/api/user_score",
            type: 'PUT',
            data: {
                score: -2
            }
        })
    })

    function display_response(response) {
        $("#answer_response").text(response)
    }

    function update_world() {
        return new Promise(function (resolve, reject) {
            let correct_src = "/assets/images/" + $("#world").data("correct")
            console.log("correct_src: " + correct_src)
            $("#world").attr("src", correct_src).effect("puff", {}, 5000)
            setTimeout(function () {
                console.log("Finished puffing")
                $(".blackboard").hide()
                resolve()
            }, 4000)
        })
    }

    function game_over() {
        console.log("Game Over")
        $(".question").hide();
        $(".answers").hide();
        $(".blackboard").show();
        $("#answer_response").effect("bounce", {}, 20000).text("GAME OVER").show();
        $.ajax({
            url: "/api/user_score",
            type: 'GET'
        })
            .then((response) => {
                console.log(response)
                $("p").effect("bounce", {}, 20000).html("<div>You Scored " + response.score + " points<br>Let's see how you did compared to everyone else<div>")

                $("#high_scores_div").removeClass("d-none").effect("bounce", {}, 20000);
            })
    }
});
