const crawler = require('./services/crawler');

(async () =>{
	let results = await crawler.fetchSingleDoubanList(0);

	console.log(results[0])
	await crawler.fetchSingleDoubanList(results[0].url);

})()
  .then(r => {
  	console.log('done');
  	process.exit(0);
  })
  .catch(e => {
  	console.log(e);
  	process.exit(1);
  })