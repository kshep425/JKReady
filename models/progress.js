module.exports = function(sequelize, DataTypes) {
    console.log('Create Progress table')
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
        type: DataTypes.INTEGER,
        // references: {
        //     model: Progress,
        //     key: 'id'
        // }
    },
    next_question: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: Progress,
        //     key: 'id'
        // }
     }
});

  Progress.associate = function(models) {
    models.Progress.hasMany(models.Users);
  }
  return Progress;
};
