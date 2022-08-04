const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	name: String,
	first_name: String,
	email: String,
});

module.exports = mongoose.model('User', studentSchema);
