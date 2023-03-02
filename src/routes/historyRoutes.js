const express = require('express');
const bodyParser = require('body-parser');

const validation = require('../middleware/validation');
const { validate } = require('../middleware/validationMiddleware');
const { getHistory, assessHistory } = require('../url/urlHistory');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', validate(validation.urlArray), async function (req, res) {
	const response = await assessHistory(req.body.urls);
	res.status(200).send(response);
});

app.get('/all', async function (_req, res) {
	res.status(200).send(await getHistory());
});
module.exports = app;
