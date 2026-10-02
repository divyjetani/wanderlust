const User = require("../models/user.js");

module.exports.renderSignup = (req, res) => {
    res.render("user/signup.ejs");
};

module.exports.signupUser = async (req, res) => {
    try {
        let { username, password, email } = req.body;
        const NewUser = new User({ email, username });
        const regUser = await User.register(NewUser, password);
        req.login(regUser, (err) => {
            if (err) {
                return next(err)
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLogin = (req, res) => {
    res.render("user/login.ejs");
};

module.exports.loginUser = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust! You are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logoutUser = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
};
