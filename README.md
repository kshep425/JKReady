# JKReady

## Description
This game will allow users to fix the sprites world, by changing html and css files.

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
