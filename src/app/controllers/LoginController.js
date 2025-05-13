const User = require('../models/User');

class LoginController{

    // [POST] /login
    async login(req, res, next){

        const { user, password } = req.body;
        
        User.findOne({ user })
            .then((user) => console.log(user))
        

        res.render('home')
    }
}

module.exports = new LoginController();