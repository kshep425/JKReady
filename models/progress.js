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

        wrong_answer_1: DataTypes.STRING,
        wrong_answer_2: DataTypes.STRING,
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
        }
    });

    Progress.associate = function (models) {
        models.Progress.hasMany(models.Users);
    }

    return Progress;
};
