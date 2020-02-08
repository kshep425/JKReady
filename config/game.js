

const game_obj = [
    {
        question: `Hey, my name’s Ernie welcome to Fox Hole Villa, a small town outside of a Jersey dump. Last week a little creature escaped from the plant and has been wreaking havoc in our small town. Don’t just stare help me clean up the town. Let’s Go

        That rascal broke the glass! Let’s fix this glass before the cats get in here. Pick the correct jquery action to fix the glass.`,

        correct_answer: "$('#broken_glass').hide()",
        correct_response: "You’re off to a running start",
        correct_img: "glass_fixed_image.png",
        wrong_answer_1: "#broken_glass {background-image: “broken_glass.png”}",
        wrong_response_1: "check that again",
        wrong_img_1: "",
        wrong_answer_2: "<td></td>",
        wrong_response_2: "Seriously???",
        wrong_img_2: "",
        next_question_id: 1,
        prev_question_id: 1,
        start_img = "glass_broken_img.png"
    },
    {
        question: `That evil doer widened cracks the roads, we can set the size of the cracks to 0 and that should close them up.

        Select the css that sets height and width of the crack images to close the cracks..`,

        correct_answer: `
    img.cracks {
        height: 0px;
        width: 0px;
    }`,
        correct_response: "Okay, I’m working with a pro",
        correct_img: "cracks_fixed_image.png",
        wrong_answer_1: "{crack-image: 0}",
        wrong_response_1: "Did you lie on your resume",
        wrong_img_1: "",
        wrong_answer_2: "let crack = 'is whack'",
        wrong_response_2: "Yes, Whitney we all remember that 'Crack is Whack'",
        wrong_img_2: "",
        next_question_id: 3,
        prev_question_id: 1,
        start_img: "cracks_broken_image.png"
    },
    {
        question: `Graffiti - Seriously Dude when will this end?

        Pick the correct DOM js method to clear the graffiti`,

        correct_answer: `
        document.getElementById("storeFront")
        `,
        correct_response: "You are becoming a code master",
        correct_img: "graffiti_fixed_image.png",
        wrong_answer_1: 'myElement.css("color","red")',
        wrong_response_1: "Did you lie on your resume",
        wrong_img_1: "",
        wrong_answer_2: ".red ",
        wrong_response_2: "Wipe those glasses off",
        wrong_img_2: "",
        next_question_id: 4,
        prev_question_id: 2,
        start_img: "graffiti_broken_image.png"
    },
    {
        question: `This place looks like the alley behind the alley. Let’s clean up before the rats get comfortable.


        What method best cleans the street?`,

        correct_answer: `
            clean_street()
        `,
        correct_response: "Great Job!!! GAME OVER",
        correct_img: "dirty_fixed_image.png",
        wrong_answer_1: 'clean.street',
        wrong_response_1: "So close but nope!",
        wrong_img_1: "",
        wrong_answer_2: "clean['street'] = true",
        wrong_response_2: "Um...it would be nice if I could clean the street that quickly!",
        wrong_img_2: "",
        prev_question_id: 3,
        start_img: "dirty_broken_image.png"

    }

]

module.exports = game_obj;