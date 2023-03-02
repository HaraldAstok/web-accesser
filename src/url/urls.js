let urls = [
	'http://www.err.ee/',
	'http://www.facebook132133.com/',
	'http://www.google.com/',
];

async function removeUrl(url) {
	const elemIndex = urls.indexOf(url);
	if (elemIndex >= 0) {
		console.log('elemIndex ->', elemIndex);
		urls.splice(elemIndex, 1);
	}

	return urls;
}

async function addUrl(url) {
	urls.push(url);
	return { urls };
}

async function getUrls() {
	return { urls };
}

module.exports = { getUrls, addUrl, removeUrl };
