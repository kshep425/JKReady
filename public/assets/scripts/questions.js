$(document).ready(function () {
  hero_idle();
  function hero_idle() {
    let widthOfSpriteSheet = 448;
    let widthOfEachSprite = 55;
    let position = widthOfEachSprite; //start position for the image
    let speed = 200; //in millisecond(ms)
    let diff = widthOfEachSprite; //difference between two sprites
  
    animationInterval = setInterval(() => {
      var spriteSheet = document.getElementById("hero-sprite-image");
      spriteSheet.style.backgroundPosition = `-${position}px 0px`;
  
      if (position < widthOfSpriteSheet) {
        position = position + diff;
      } else {
        //increment the position by the width of each sprite each time
        position = widthOfEachSprite;
      }
      //reset the position to show first sprite after the last one
    }, speed);
  }

    // blogContainer holds questions
    let quiz_container = $(".quiz-container");
    // Click events for the edit and delete buttons
    $(document).on("click", "next-question-button", nextQuestion);
    $(document).on("click", "submit-button", handlePostEdit);
    postCategorySelect.on("change", handleCategoryChange);
    var posts;
  
    // This function grabs posts from the database and updates the view
    function getPosts(category) {
      var categoryString = category || "";
      if (categoryString) {
        categoryString = "/category/" + categoryString;
      }
      $.get("/api/posts" + categoryString, function(data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty();
        }
        else {
          initializeRows();
        }
      });
    }
});

next_question();
submit_button()