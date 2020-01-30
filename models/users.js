module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username: DataTypes.STRING,
    score: DataTypes.BOOLEAN,
    progress_id: {
        references: {
            model: Progress,
            key: 'id'
        }
    }
  });
  return Todo;
};
