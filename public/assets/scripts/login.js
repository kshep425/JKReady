$(document).ready(function () {
    console.log(window.location.pathname)
    var login_form = $("#login_form");
    var username_input = $("input#username_input");
    var password_input = $("input#password_input");
    var logout_form = $("#logout_form");
    var logout_link = $("#logout_link");
    logout_link.hide();

    // When the form is submitted, we validate there's an username and password entered
    login_form.on("submit", function (event) {
        event.preventDefault();
        console.log("Login Form submitted")
        var user_data = {
            username: username_input.val().trim(),
            password: password_input.val().trim()
        };
        console.log(user_data)

        if (!user_data.username || !user_data.password) {
            return;
        }

        // If we have an username and password we run the login_user function and clear the form
        login_user(user_data.username, user_data.password);
        username_input.val("");
        password_input.val("");

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
                logout_link.show();
                window.location.replace("/intro");
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

});