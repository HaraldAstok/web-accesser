const { getUrls } = require('./urls');

const HISTORY_LENGTH = 10;

let urlHistory = {};

async function initHistory() {
	const { urls } = await getUrls();
	for (const url of urls) {
		urlHistory[url] = [];
	}
}

async function getHistory() {
	return urlHistory;
}

async function updateHistory(url, response) {
	if (urlHistory[url]) {
		let result = urlHistory[url];
		result.unshift(response); // add new response at the beginning of array
		result.splice(HISTORY_LENGTH, urlHistory[url].length); // keep the response length at 10

		urlHistory[url] = result;
	} else {
		urlHistory[url] = []; // add new url to history
	}
}

async function assessHistory(urls) {
	const result = {};
	for (const url of urls) {
		const history = urlHistory[url];
		if (history.length < HISTORY_LENGTH) {
			result[url] = { message: 'Not enough data' };
		} else {
			const average = history.reduce((acc, cur) => acc + cur) / history.length;
			result[url] = { averageUpTime: average };
		}
	}
	return result;
}

module.exports = { initHistory, getHistory, updateHistory, assessHistory };
