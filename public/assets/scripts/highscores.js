$(document).ready(function(){
    console.log("Ready View High Scores Script")
    const high_scores_form = $("#high_scores_form");
    const high_scores_div = $("#high_scores_div");

    high_scores_form.on("submit", function (event) {
        event.preventDefault();
        console.log('View High Scores');
        view_high_scores()
    })

    function view_high_scores(){
        console.log("View High Scores Page")
        window.location.replace("/scores");
    }
});