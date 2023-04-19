const mongoose = require('mongoose');

const {Schema} = mongoose;
const {model} = mongoose;

const users = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
});

module.exports = model('User', users);
