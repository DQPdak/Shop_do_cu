const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/Users', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected!');
    } catch (error) {
        console.log('Connect Failure!');
    }
}

module.exports = { connect };