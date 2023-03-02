const cron = require('node-cron');
const { checkUrl } = require('../fetchUrlResponse/checkUrlResponse');
const { getUrls } = require('../url/urls');

async function scheduleCronJobs() {
	cron.schedule('*/2 * * * * *', async function () {
		var today = new Date();
		var time =
			today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
		console.log('running cron ->', time);

		const { urls } = await getUrls();
		if (urls.length > 0) {
			await urls.map(async (url) => {
				await checkUrl(url);
			});
		}
	});
}

module.exports = { scheduleCronJobs };
