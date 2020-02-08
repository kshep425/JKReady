$(document).ready(function () {
    let animationInterval;
    let widthOfSpriteSheet = 166;
    let widthOfEachSprite = 55.33;
    let spriteSheet = document.getElementById("foxy-fixer-idle-speak");
    let animationInterval1;
    let widthOfSpriteSheet1 = 166;
    let widthOfEachSprite1 = 55.33;
    let spriteSheet1 = document.getElementById("foxy-fixer-celebrate");
    let animationInterval2;
    let widthOfSpriteSheet2 = 168;
    let widthOfEachSprite2 = 56;
    let spriteSheet2 = document.getElementById("villain-defeat");

    //Start animation
    hero_celebrate_animation();
    hero_start_animation();
    villain_defeat_animation() 

    function hero_start_animation() {
        let position = 56; //start position for the image
        let speed = 200; //in millisecond(ms)
        let diff = widthOfEachSprite;

        animationInterval = setInterval(() => {
            spriteSheet.style.backgroundPosition = `-${position}px 0px`;

            if (position < widthOfSpriteSheet) {
                position = position + diff;
            } else {

                position = widthOfEachSprite;
            }
            //reset the position to show first sprite after the last one
        }, speed);
    }

    function hero_celebrate_animation() {
        let position1 = 56; //start position for the image
        let speed1 = 100; //in millisecond(ms)
        let diff1 = widthOfEachSprite1;
        //difference between two sprites
        animationInterval1 = setInterval(() => {
            spriteSheet1.style.backgroundPosition = `-${position1}px 0px`;

            if (position1 < widthOfSpriteSheet1) {
                position1 = position1 + diff1;
            } else {
                //increment the position by the width of each sprite each time
                position1 = widthOfEachSprite1;
            }
            //reset the position to show first sprite after the last one
        }, speed1);
    }

    function villain_defeat_animation() {
        let position2 = 58; //start position for the image
        let speed2 = 100; //in millisecond(ms)
        let diff2 = widthOfEachSprite2;
        //difference between two sprites
        animationInterval2 = setInterval(() => {
            spriteSheet2.style.backgroundPosition = `-${position2}px 0px`;

            if (position2 < widthOfSpriteSheet2) {
                position2 = position2 + diff2;
            } else {
                //increment the position by the width of each sprite each time
                position2 = widthOfEachSprite2;
            }
            //reset the position to show first sprite after the last one
        }, speed2);
    }



});
