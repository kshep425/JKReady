$(document).ready(function () {
    let intro_form = $("#intro_form");

    var image = $("#world");


    // function fixed_image() {
    //     console.log(image.src);
    //     switch (image.src) {
    //         case "fixed_image_1":
    //             image.src = "broken_image_2.png"
    //             break;
    //         case "fixed_image_2":
    //             image.src = "fixed_image_3.png"
    //             break;
    //         default:
    //             console.log('No image found');
    //     }
    //     console.log(image.src);
    // }


//     if (image.src.match("broken_image_1")) {
//         image.src = "fixed_image_1";
//     }
//     else if (image.src.match("broken_image_2")) {
//         image.src = "fixed_image_2";
//     } else
//         if (image.src.match)
// }
// }




    // function pause_next() {
    //     setTimeout(function () { alert_modal(); }, 3000);
    // }


    intro_form.on("submit", function (event) {
        event.preventDefault();
        console.log("Start Game by getting questions")

        window.location.replace("/game")
    })

    $("#correct_answer").click(function (event) {
        event.preventDefault();
        console.log("correct answer clicked");
        // cheer_modal();
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
    })
   $(".wrong").click(function (event) {
        event.preventDefault();
        console.log($(this))
        $( ".container" ).effect( "shake", {}, 500, function(){
            //add sound
            console.log("WRONG ANSWER!!!!")
        } );

        if ($(this).attr().includes("wrong")){
            $( "#world" ).effect( "shake", {}, 500, function(){
                //add sound
                console.log("WRONG ANSWER!!!!")
            } );
        } else {
            $("#world").effect("Fade", {}, 1000, function(){
                console.log("You're Right")
            })
        }
    
  })
});


