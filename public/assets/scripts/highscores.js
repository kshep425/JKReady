$(document).ready(function(){
    console.log("Ready View High Scores Script")
    const high_scores_form = $("#high_scores_form");
    const high_scores_div = $("#high_scores_div");
    high_scores_div.hide();

    high_scores_form.on("submit", function (event) {
        event.preventDefault();
        console.log('View High Scores');
        // high_scores_div.show();
        view_high_scores()
    })

    function view_high_scores(){
        console.log("View High Scores Page")
        high_scores_div.show();
        window.location.replace("/scores");
    }
});