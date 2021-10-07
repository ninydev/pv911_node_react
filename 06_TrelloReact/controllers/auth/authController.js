const modelUser = require("../../models/user");
const modelRole = require("../../models/role");
const modelSession = require("../../models/session");

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
        function (err, res_user) {
            if(err) { console.log(err); return err;}
            if(res_user.length > 0) {
                // Есть такой в базе
                // response.send(res); // так он отправит пользователя
                modelSession.find({user_id: res_user._id}, function (err, res_session) {
                    if(err) { console.log(err); return err;}
                    if(res_session.length > 0) { // Такой пользователь уже вошел в систему

                    } else {
                        const newSession =  new modelSession({user_id: res_user._id});
                        newSession.save(function (err) {
                            if(err) { console.log(err); return err;}
                            response.send(newSession._id);
                        })
                    }

                })
            } else {
                // Нет такой пары в базе - отправить ошибку
                response(false)
            }
        });

}

