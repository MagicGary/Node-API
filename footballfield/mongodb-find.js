//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB Server');
	}
	console.log('Connection established successfully');
	const db = client.db('TodoApp');

	/* db.collection('Todos').find({
		_id: new ObjectID('5b8a08cfd91e103ee4128eab')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Todos', err);
	}); */

	db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('unable to count', err);
	}); 

	db.collection('Users').find({
		name: 'MagcG'
	}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2))
	}, (err) => {
		console.log('Unable to fetch from Users', err);
	});

	//client.close();
});