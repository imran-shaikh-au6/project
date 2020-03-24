var express = require("express");
var session = require("express-session");
const port

require("./db");
const propertyRoutes = require("./Routes/propertyRoutes");
const userRutes = require("./Routes/userRoutes");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: "project",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    })
);
app.get("/", (req, res) => {
    res.send("hello");
});
app.use(propertyRoutes);
app.use(userRutes);
app.listen(1234, () => {
    console.log("server started");
});
