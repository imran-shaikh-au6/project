schema.statics.userFind = function(email, password) {
    var userObj = null;
    return new Promise(function(resolve, reject) {
        User.findOne({ email: email })
            .then(function(user) {
                if (!user) reject("Incorrect Credintials");
                userObj = user;
                return bcrypt.compare(password, user.password);
            })
            .then(function(isMatched) {
                if (!isMatched) reject("Incorrect credentials");
                resolve(userObj);
            })
            .catch(function(err) {
                reject(err);
            });
    });
};

