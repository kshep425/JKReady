$(document).ready(function () {
  hero_idle();
  let animationInterval;
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
});
