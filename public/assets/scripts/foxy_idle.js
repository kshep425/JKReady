$(document).ready(function () {
    var animationInterval;
    let widthOfSpriteSheet = 448;
    let widthOfEachSprite = 56;
    let spriteSheet = document.getElementById("foxy-fixer-idle-speak");

    //Start animation
    hero_start_animation();

    function hero_start_animation() {
        let position = widthOfEachSprite; //start position for the image
        let speed = 200; //in millisecond(ms)
        let diff = widthOfEachSprite; //difference between two sprites
        animationInterval = setInterval(() => {
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
