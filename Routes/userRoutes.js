var express = require("express");
var router = express.Router();
var User = require("../model/user");

router.post("/user/register", function(req, res) {
    var user = req.body;
    var user = new User({ ...req.body });
    user.save()
        .then(function(user) {
            req.session.userId = user._id;
            res.send("Succesfull");
        })
        .catch(function(err) {
            console.log(err);
            if (err.name === "ValidationError")
                return res.status(400).send(`Validation Error: ${err.message}`);
        });
});
router.post("/user/login", function(req, res) {
    var body = req.body;
    var email = body.email;
    var password = body.password;
    if (!email || !password) return res.send("Invalid Creadiantials");
    User.userFind(email, password)
        .then(function(user) {
            req.session.userId = user._id;
            res.send("Successfull");
        })
        .catch(function(err) {
            console.log(err);
            res.send("invalid Credintials");
        });
});

module.exports = router;
