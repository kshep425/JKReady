var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    console.log("Create Users Table")
    var Users = sequelize.define("Users", {
        // The username to login to the site
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // This allows user id to be a foreign key in the Scores table
    Users.associate = function (models) {
        models.Users.hasMany(models.Scores);
    }

    // This allows progress id to be a foreign key in the Users table.
    Users.associate = function (models) {
        models.Users.belongsTo(models.Progress, {
            foreignKey: {
                allowNull: false
            },
            defaultValue: 0
        })
    };

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Users.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    // Before a User is created, we will automatically hash their password
    Users.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return Users;
};
