const express = require('express');
const { scheduleCronJobs } = require('./cron/scheduleCron');
const urlRoutes = require('./routes/urlRoutes');
const historyRoutes = require('./routes/historyRoutes');
const { initHistory } = require('./url/urlHistory');

const app = express();
const PORT = 3001;

app.use('/urls', urlRoutes);
app.use('/history', historyRoutes);

init();

async function init() {
	try {
		app.listen(PORT, () => {
			console.log(`App listening on port ${PORT}`);
		});
		await initHistory();
		await scheduleCronJobs();
	} catch (error) {
		console.error(`An error occurred: ${JSON.stringify(error)}`);
		process.exit(1);
	}
}
