"use strict";

require("dotenv").config()

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
const initialize_db = require("../config/db_connection")
var db = {};

const db_obj = {
    database: process.env.DB_NAME || "jkready",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PW,
    host: process.env.DB_HOST || "localhost"
}
console.log(db_obj)

const sequelize = initialize_db(db_obj)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
    console.log("model Name: " + modelName)
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
