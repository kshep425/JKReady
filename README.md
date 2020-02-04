# Foxy The Fixer
By JKReady

## Description
Help Foxy the Fixer to restore worlds back to their good state, by changing html and css files ruined by an evildoer!

Open the game here: [https://rabbit-the-fixer.herokuapp.com/](https://rabbit-the-fixer.herokuapp.com/)

## Authors
* [Keisha Shepherd - kshep425](https://github.com/kshep425)

* [Jennifer Genes - JenG1](https://github.com/JenG1)

* [Robin Jones - Rmj22](https://github.com/Rmj22)

## Usage
These are the steps to run this locally on your machine
1.  Clone the JKReady github
    ```
        git clone https://github.com/kshep425/JKReady.git
    ```
1.  cd into JKReady folder
    ```
        cd JKReady
    ```
1.  Add .env file to JKReady folder
1.  In your .env file, save your database configuration information.
    ```
        DB_NAME={name of database e.g. jkready_db}
        DB_HOST={Hostname e.g. localhost}
        DB_USER={username e.g. root}
        DB_PW={username's password for db login}
    ```
1.  Run npm install
    ```
        npm install
    ```
1.  Start the server and db connection
    ```
        node server.js
    ```
    or use
    ```
        npm start
    ```

## Dependencies
bcryptjs,
dotenv,
express,
express-session,
html,
jest,
mysql2,
passport,
passport-local,
phaser,
sequelize,
supertest

## MIT License
MIT License

Copyright (c) 2020 Keisha Shepherd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
