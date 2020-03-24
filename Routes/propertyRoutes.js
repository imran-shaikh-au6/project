var express = require("express");
var authenticate = require("../middleware/authenticate")
var Property = require("../model/property");
var router = express.Router();
router.post("/property",authenticate, (req, res) => {
    var propert = new Property({ ...req.body });
    propert
        .save()
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err.message);
        });
});
module.exports = router;
