const express = require('express');
const bodyParser = require('body-parser');

const { getUrls, addUrl, removeUrl } = require('../url/urls');
const validation = require('../middleware/validation');
const { validate } = require('../middleware/validationMiddleware');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async function (_req, res) {
	const urls = await getUrls();
	res.status(200).send(urls);
});

app.post('/', validate(validation.url), async function (req, res) {
	const response = await addUrl(req.body.url);
	res.status(200).send(response);
});

app.delete('/', async function (req, res) {
	const response = await removeUrl(req.body.url);
	res.status(200).send(response);
});

module.exports = app;
