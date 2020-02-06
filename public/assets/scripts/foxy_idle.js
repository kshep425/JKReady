$(document).ready(function () {

  function hero_start_animation() {
      let widthOfSpriteSheet = 448;
      let widthOfEachSprite = 56;
      let spriteSheet;

      let position = widthOfEachSprite; //start position for the image
      let speed = 200; //in millisecond(ms)
      let diff = widthOfEachSprite; //difference between two sprites

      animationInterval = setInterval(() => {
          spriteSheet = document.getElementById("foxy-fixer-idle-speak");
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
//Start animation
// villain_start_animation();
hero_start_animation();

});
