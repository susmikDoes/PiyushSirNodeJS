const express = require("express");
const router = express.Router();
const User = require("./models/User");

function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect("/login");
}

router.get("/", (req, res) => {
    res.redirect("/login");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", async (req, res) => {
    const { name, username, password } = req.body;
    try {
        const exists = await User.findOne({ username });
        if (exists) {
            return res.send("User already exists. <a href='/signup'>Try again</a>");
        }
        const user = new User({ name, username, password });
        await user.save();
        res.redirect("/login");
    } catch (err) {
        res.send("Signup error. " + err.message);
    }
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            req.session.user = user;
            res.redirect("/home");
        } else {
            res.send("Invalid credentials. <a href='/login'>Try again</a>");
        }
    } catch (err) {
        res.send("Login error.");
    }
});

router.get("/home", isAuthenticated, (req, res) => {
    res.render("home", { user: req.session.user });
});

router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) return res.send("Logout error");
        res.redirect("/login");
    });
});

module.exports = router;
