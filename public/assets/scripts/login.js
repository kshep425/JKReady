$(document).ready(function () {
    console.log(window.location.pathname)
    var login_form = $("#login_form");
    var username_input = $("input#username_input");
    var password_input = $("input#password_input");
    var logout_form = $("#logout_form");

    // When the form is submitted, we validate there's an username and password entered
    $("#login_btn").on("click", function (event) {
        event.preventDefault();
        let user_data = get_user_data()

        console.log("Login Form submitted")
        console.log(user_data)

        if (!user_data.username || !user_data.password) {
            return;
        }

        // If we have an username and password we run the login_user function and clear the form

        login_user(user_data.username, user_data.password);
        username_input.val("");
        password_input.val("");

    });

    $("#signup_btn").on("click", function (event) {
        event.preventDefault();
        let user_data = get_user_data()

        console.log("Signup Form submitted")
        console.log(user_data)

        if (!user_data.username || !user_data.password) {
            return;
        }

        // If we have an username and password we run the signup_user function and go back to the login page.
        try {
            signup_user(user_data.username, user_data.password);
            password_input.val("");

            $("#confirm").text(user_data.username + " has successfully signed up. Now login!")

        } catch {
            $("#confirm").text(user_data.username + " could not sign up.")
        }
    });


    logout_form.on("submit", function (event) {
        event.preventDefault();
        console.log("Logout user");
        logout_user();
    })

    // login_user does a post to our "api/login" route and if successful, redirects us the the members page
    function login_user(username, password) {
        $.post("/api/login", {
            username: username,
            password: password
        })
            .then(function () {
                console.log("Go to intro page")
                window.location.replace("/intro");
            })
            .catch(function(){
                $("#confirm").text(user_data.username + " could not Login.")
            })
    }

    function logout_user() {
        $.get("/api/logout")
            .then(function () {
                window.location.replace("/login")
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    function get_user_data() {
        return {
            username: username_input.val().trim(),
            password: password_input.val().trim()
        };
    }

    function signup_user(username, password) {
        $.post("/api/signup", {
            username: username,
            password: password
        })
            .then(function () {
                console.log("Go to login page")
                window.location.replace("/login");
            })
            .catch(function(err){
                console.log(err)
                $("#confirm").text(user_data.username + " could not sign up.")
            })
    }
});