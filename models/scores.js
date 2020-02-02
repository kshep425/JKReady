// const Users = require("./users")

module.exports = function (sequelize, DataTypes) {
    console.log("Create Scores Table")
    var Scores = sequelize.define("Scores", {
        score: DataTypes.INTEGER
    });

    Scores.associate = function (models) {
        models.Scores.belongsTo(models.Users, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Scores;
};
