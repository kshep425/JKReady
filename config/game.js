

const game_obj = [
    {
        id: 1,
        question: `That rascal broke the glass! Let’s fix this glass before the cats get in here. Pick the correct jquery action.`,
        correct_answer: "$('#broken_glass').hide()",
        correct_response: "You’re off to a running start",
        correct_img: "glass_fixed_image.png",
        wrong_answer_1: "#broken_glass {background-image: “broken_glass.png”}",
        wrong_response_1: "check that again",
        wrong_answer_2: "<td></td>",
        wrong_response_2: "Seriously???",
        next_question_id: 2,
        prev_question_id: 1,
        start_img: "glass_broken_image.png"
    },
    {
        id: 2,
        question: `That evil-doer widened cracks in the road, select the CSS to set the size of the cracks to 0 and that should close them up.`,

        correct_answer: `
            img.cracks {
                height: 0px;
                width: 0px;
            }`,
        correct_response: "Okay, I’m working with a pro",
        correct_img: "cracks_fixed_image.png",
        wrong_answer_1: "{crack-image: 0}",
        wrong_response_1: "Did you lie on your resume?",
        wrong_img_1: "",
        wrong_answer_2: "let crack = 'is whack'",
        wrong_response_2: "Yes, Whitney we all remember that 'Crack is Whack'",
        wrong_img_2: "",
        next_question_id: 3,
        prev_question_id: 1,
        start_img: "cracks_broken_image.png"
    },
    {
        id: 3,
        question: `Graffiti - Seriously Dude when will this end?

        Pick the correct DOM js method to clear the graffiti`,

        correct_answer: `
        document.getElementById("#storeFront")
        `,
        correct_response: "You are becoming a code master",
        correct_img: "graffiti_fixed_image.png",
        wrong_answer_1: 'myElement.css("color","red")',
        wrong_response_1: "I'm seeing a red X!",
        wrong_img_1: "",
        wrong_answer_2: ".red ",
        wrong_response_2: "Wipe those glasses off",
        wrong_img_2: "",
        next_question_id: 4,
        prev_question_id: 2,
        start_img: "graffiti_broken_image.png"
    },
    {
        id: 4,
        question: `This place looks like the alley behind the alley. Let’s clean up before the rats get comfortable.


        What method best cleans the street?`,

        correct_answer: `
            clean_street()
        `,
        correct_response: "Great Job!!!",
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