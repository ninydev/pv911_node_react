const modelUser = require("../../models/user");
const modelRole = require("../../models/role");

exports.register = function (request,response) {
    const user = new modelUser (request.body);
    modelUser.find({email: user.email},
        function (err, res) {
            if(err) { console.log(err); return err;}
            if(res.length > 0) {
                // Есть такой в базе - придумать как отправить ошибку
                response.send(false);
            } else {
                user.save( function (err) {
                    if(err) { console.log(err); return err;}
                    response.send(user);
                })
            }
        });
}

exports.checkEmail = function (request,response) {
    const {email} = request.params;
    modelUser.find({email: email},
        function (err, res) {
            if(err) { console.log(err); return err;}
            if(res.length > 0) {
                response.send(false);
            } else {
                response.send(true);
            }
        });
}

exports.tryLogin = function (request,response) {
    const user = new modelUser (request.body);
    modelUser.find({email: user.email, password: user.password},
        function (err, res) {
            if(err) { console.log(err); return err;}
            if(res.length > 0) {
                // Есть такой в базе
                response.send(res); // так он отправит пользователя
            } else {
                // Нет такой пары в базе - отправить ошибку
            }
        });

}

