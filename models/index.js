"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);

var db = {};

const db_obj = {
    database: process.env.DB_NAME || "jkready2",
    username: process.env.DB_USER || "root2",
    password: process.env.DB_PW,
    host: process.env.DB_HOST || "localhost2"
}
console.log(db_obj)

const sequelize = initialize_db(db_obj)

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
