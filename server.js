require('dotenv/config');
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const port = 3000;
const Student = require('./models/student');

server.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
	user: process.env.MONGO_USER,
	pass: process.env.MONGO_PASS,
});

mongoose.connection.on('connected', () => {
	console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
	console.error(err);
});

server.get('/', async (req, res) => {
	// res.send('Hello World!');
	const Students = await Student.find();
	res.send(Students);
});

server.post('/', async (req, res) => {
	await Student.create({
		name: req.body.name,
		first_name: req.body.first_name,
		email: req.body.email,
	});

	res.send('OK!');
});

server.put('/', async (req, res) => {
	// res.send('PUT Request Called');
	await Student.updateOne({
		name: 'bob',
	});
});

//delete deleteone ()

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
