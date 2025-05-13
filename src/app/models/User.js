const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

const Schema = mongoose.Schema;

const User = new Schema({
    user: { type: String, unique: true },
    password: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);