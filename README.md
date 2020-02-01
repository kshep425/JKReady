# Rabbit The Fixer
By JKReady

## Description
Help Rabbit the Fixer to restore worlds back to their good state, by changing html and css files ruined by an evildoer!

## Authors
* [Keisha Shepherd](https://github.com/kshep425)

* [Jennifer Genes](https://github.com/JenG1)

* [Robin Jones](https://github.com/Rmj22)

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
