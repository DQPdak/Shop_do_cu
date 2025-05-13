const loginRoute = require('./login');


function route(app){
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/login', loginRoute);
}

module.exports = route;