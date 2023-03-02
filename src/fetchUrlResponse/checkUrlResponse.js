const http = require('http');
const { updateHistory } = require('../url/urlHistory');

const codes = require('../util/httpCodes').codes;

async function checkUrl(url) {
	try {
		http
			.get(url, async function (response) {
				if (codes.includes(response.statusCode)) {
					// console.log(`Site is responsive: ${url}`);
					await updateHistory(url, 1);
				}
			})
			.on('error', async function (e) {
				// console.log(`Site did not respond: ${url} - responded with \"${e.code}\"`);
				await updateHistory(url, 0);
			});
	} catch (e) {
		// console.log(`Could not verify url - ${url} - responded with \"${e.code}\"`)
		await updateHistory(url, 0);
	}
}

module.exports = { checkUrl };
