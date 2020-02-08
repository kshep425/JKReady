module.exports = function (sequelize, DataTypes) {
    console.log('Create Progress Table')
    var Progress = sequelize.define("Progress", {
        stage: DataTypes.STRING,
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correct_answer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correct_response: {
            type: DataTypes.STRING
        },
        correct_img: {
            type: DataTypes.STRING
        },

        wrong_answer_1: DataTypes.STRING,
        wrong_response_1: DataTypes.STRING,
        wrong_img_1: DataTypes.STRING,

        wrong_answer_2: DataTypes.STRING,
        wrong_response_2: DataTypes.STRING,
        wrong_img_2: DataTypes.STRING,
        // point value for question
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 5,
            allowNull: false
        },

        //id for previous question
        prev_question_id: {
            type: DataTypes.INTEGER,
        },

        //id for next question
        next_question_id: {
            type: DataTypes.INTEGER,
        },
        start_img: DataTypes.STRING
    });

    Progress.associate = function (models) {
        models.Progress.hasMany(models.Users);
    }

    return Progress;
};
