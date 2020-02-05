require("dotenv").config()

const db_obj = {
    database: process.env.DB_NAME || "jkready_db",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PW || "juanita1",
    host: process.env.DB_HOST || "localhost"
}

module.exports = db_obj;