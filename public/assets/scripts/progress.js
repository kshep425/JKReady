$(document).ready(function () {

    let $quiz_container = $(".quiz-container");
    let intro_form = $("#intro_form");
    let questions = [];
    //get_questions();
    // This function resets the questions displayed with new questions from the database
    function initialize_rows(questions) {
        $quiz_container.empty();
        var rowsToAdd = [];
        for (var i = 0; i < questions.length; i++) {
            rowsToAdd.push(questions[i]);
        }
        $quiz_container.prepend(rowsToAdd);
        console.log(rowsToAdd);
    }
    // This function grabs questinos from the database and updates the questions view
    function get_questions() {
        $.get("/api/questions/3", function (data) {
            questions = data;
            initialize_rows(questions);
        });
    }

    intro_form.on("submit", function (event) {
        event.preventDefault();
        console.log("Start Game by getting questions")
        get_questions();
        window.location.replace("/game")
    })
});

