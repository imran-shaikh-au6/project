var mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://imran:imranshaikh@mongodb1-1kxlr.mongodb.net/test",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        }
    )
    .then(() => {
        console.log("mongoose connected");
    })
    .catch(err => {
        console.log(err.message);
    });
