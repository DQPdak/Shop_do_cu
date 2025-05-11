const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const PORT = 3000;

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => console.log(`App listening at http:localhost:${PORT}`));