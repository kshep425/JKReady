$(document).ready(function () {
    let intro_form = $("#intro_form");

    var image = $("#world");
    function playAudio(assistant) {
        let text_to_speech = '<speak>'
            + 'I can play a sound'
            + '<audio src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg">a digital watch alarm</audio>. '
            + '</speak>'
        assistant.tell(text_to_speech);
    };
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
        play_audio();
        // fixed_image();
        let next_id = $("#next_question_id").attr("data-next_question_id")
        console.log(next_id);
        $.ajax({
            url: "/api/user_data",
            type: 'PUT',
            data: { ProgressId: next_id || 3 },
            success: function () {
                window.location.replace("/game");
            }
        })
        sound.play();
    })
    $(".wrong").click(function (event) {
        event.preventDefault();
        console.log($(this))
        $(".container").effect("shake", {}, 500, function () {
            //add sound
            console.log("WRONG ANSWER!!!!")
            // sound.play();
        });

        if ($(this).attr().includes("wrong")) {
            $("#world").effect("shake", {}, 500, function () {
                //add sound
                console.log("WRONG ANSWER!!!!")
            });
        } else {
            $("#world").effect("Fade", {}, 1000, function () {
                console.log("You're Right")
            })
        }

    })
});


