const db = require("../models")

db_queries = {
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

    get_all_scores: function (){
        return db.Scores.findAll({
            include: [db.Users],
            limit: 10
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
        db.Users.findOne({
            where: {
                id: user_id,
            },
            include: [db.Progress]
        })
    },

    add_question: function (params){
        console.log("Create questions with these params:")
        console.log(params)
        return db.Progress.create(params)
    }

}

module_exports = db_queries;