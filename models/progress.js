module.exports = function(sequelize, DataTypes) {
  var Progress = sequelize.define("Progress", {
    level: DataTypes.STRING,
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
    points: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
        allowNull: false
    },
    prev_question: {
        references: {
            model: Progress,
            key: 'id'
        }
    },
    next_question: {
        references: {
            model: Progress,
            key: 'id'
        }
    }
  });
  return Progress;
};
