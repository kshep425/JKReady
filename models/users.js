// const Progress = require("./progress")

module.exports = function(sequelize, DataTypes) {
    console.log("Create Users Table")
  var Users = sequelize.define("Users", {
    username: DataTypes.STRING,
    score: DataTypes.BOOLEAN
    // progress_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Progress,
    //         key: 'id'
    //     }
    // }
  });

  Users.associate = function(models) {
      console.log("Did you reach here?")
    models.Users.hasMany(models.Scores);
    console.log("  - associate Score")
}
Users.associate = function(models){
    models.Users.belongsTo(models.Progress, {
        foreignKey: {
            allowNull: false
        }
    })
    console.log("  - associate Progress")
  };

  return Users;
};
