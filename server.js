const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/about.html');
})

app.get('/projects', (req, res) => {
	res.sendFile(__dirname + '/projects.html');
})
app.get('/contact', (req, res) => {
	res.sendFile(__dirname + '/contact.html');
})
app.listen(3000, () => {
	console.log('app is running on port 3000')
});
