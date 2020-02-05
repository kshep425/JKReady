$(document).ready(function () {
  let animationInterval;

  // function villain_start_animation() {
  //     let widthOfSpriteSheet = 168;
  //     let widthOfEachSprite = 56;

  //     let position = widthOfEachSprite; //start position for the image
  //     let speed = 150; //in millisecond(ms)
  //     let diff = widthOfEachSprite; //difference between two sprites

  //     animationInterval = setInterval(() => {
  //         var spriteSheet = document.getElementById("villain-sprite-image");

  //         //spriteSheet.style.backgroundPosition = `-${position}px 0px`;

  //         if (position < widthOfSpriteSheet) {
  //             position = position + diff;
  //         } else {
  //             //increment the position by the width of each sprite each time
  //             position = widthOfEachSprite;
  //         }
  //         //reset the position to show first sprite after the last one
  //     }, speed);
  // }

  function hero_start_animation() {
      let widthOfSpriteSheet = 448;
      let widthOfEachSprite = 56;

      let position = widthOfEachSprite; //start position for the image
      let speed = 200; //in millisecond(ms)
      let diff = widthOfEachSprite; //difference between two sprites

      animationInterval = setInterval(() => {
          var spriteSheet = document.getElementById("foxy-fixer-idle-speak");
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
//Start animation
villain_start_animation();
hero_start_animation();

});
