const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
	try {
		await mongoose.connect(process.env.DB);
		console.log('DB connectado!');
	} catch (error) {
		console.error(error);
	}
};
