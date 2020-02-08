const db = require("../models")

const db_queries = {
    get_user_score: function (id) {
        return db.Scores.findOne(
            {
                where:
                {
                    UserId: id
                },
                include: db.Users
            }
        )
    },

    increment_user_score: function (id, score) {
        return db.Scores.increment(
            {
                score: score,
            },
            {
                where: {
                    UserId: id
                }
            }
        )
    },

    get_all_scores: function () {
        return db.Scores.findAll({
            include: [db.Users],
            limit: 5,
            order: [['score', 'DESC']]
        })
    },

    get_progress_table: function () {
        return db.Progress.findAll({})
    },

    get_question_by_id: function (progress_id) {
        return db.Progress.findOne({
            where: {
                id: progress_id
            }
        })
    },

    get_user_data: function (user_id) {
        return db.Users.findOne({
            where: {
                id: user_id,
            },
            include: [db.Progress]
        })
    },

    add_question: function (params) {
        console.log("Create questions with these params:")
        console.log(params)
        return db.Progress.create(params)
    },

    add_questions: function (questions_array) {

        return db.Progress.bulkCreate(questions_array, {
            updateOnDuplicate: ["id", "question", "correct_answer", "correct_response", "correct_img", "wrong_answer_1", "wrong_response_1", "wrong_answer_2", "wrong_response_2", "next_question_id", "prev_question_id"]
        })

    }

}

module.exports = db_queries;