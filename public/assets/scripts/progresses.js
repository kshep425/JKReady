$(document).ready(function () {
  let $quiz_container = $(".quiz-container");
  hero_idle();
  function hero_idle() {
    let widthOfSpriteSheet = 448;
    let widthOfEachSprite = 55;
    let position = widthOfEachSprite; //start position for the image
    let speed = 200; //in millisecond(ms)
    let diff = widthOfEachSprite; //difference between two sprites

    animationInterval = setInterval(() => {
      var spriteSheet = document.getElementById("hero-sprite-image");
      //spriteSheet.style.backgroundPosition = `-${position}px 0px`;

      if (position < widthOfSpriteSheet) {
        position = position + diff;
      } else {
        //increment the position by the width of each sprite each time
        position = widthOfEachSprite;
      }
      //reset the position to show first sprite after the last one
    }, speed);
  }
    // Click events for the edit and delete buttons
    // $(document).on("click", "next-question-button", nextQuestion);
    // $(document).on("click", "submit-button", handlePostEdit);
    let questions = [];
    get_questions();
      // This function resets the questions displayed with new questions from the database
    function initialize_rows() {
      $quiz_container.empty();
      var rowsToAdd = [];
      for (var i = 0; i < questions.length; i++) {
        rowsToAdd.push(createNewRow(questions[i]));
      }
      $quiz_container.prepend(rowsToAdd);
    }
   // This function grabs questinos from the database and updates the questions view
   function get_questions() {
    $.get("/api/questions/:id", function(data) {
      questions = data;
      initialize_rows();
      console.log(questions)
    });
  }
});

// next_question();
// submit_button()