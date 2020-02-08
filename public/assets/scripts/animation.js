// $(document).ready(function () {

//     animateScript();
//     var tID; //we will use this variable to clear the setInterval()
//     function animateScript() {
//     var    position = 56; //start position for the image slicer
//     const  interval = 300; //100 ms of interval for the setInterval()
//     tID = setInterval ( () => {
//     document.getElementById("#foxy-fixer-celebrate").style.visibility='visible';
//     document.getElementById("#foxy-fixer-celebrate").style.backgroundPosition = 
//     `-${position}px 0px`; 
//     //we use the ES6 template literal to insert the variable "position"
//     if (position < 448)
//     { position = position + 56;}
//     //we increment the position by 256 each time
//     else
//     { position = 56; }
//     //reset the position to 256px, once position exceeds 1536px
//     }
//     , interval ); //end of setInterval
//     } //end of animateScript()
// });