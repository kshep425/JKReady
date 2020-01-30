module.exports = function(sequelize, DataTypes) {
  var Scores = sequelize.define("Scores", {
    user_id: {
        references: {
            model: Users,
            key: 'id'
        }
    },
    score: DataTypes.INTEGER
  });
  return Scores;
};
