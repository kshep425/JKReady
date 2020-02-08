$(document).ready(function () {
    let intro_form = $("#intro_form");

    let image = $("#world");

    intro_form.on("submit", function (event) {
        event.preventDefault();
        console.log("Start Game by getting questions")

        window.location.replace("/game")
    })

    $("#correct_answer").click(function (event) {
        event.preventDefault();
        console.log("correct answer clicked");

        let next_id = $("#next_question_id").attr("data-next_question_id")
        let response = $("#correct_answer").attr("data-response")
        display_response(response);
        console.log(next_id);
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
                window.location.replace("/game/" + next_id);
            }
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

    function display_response(response){
        $("#answer_response").text(response)
    }
});
