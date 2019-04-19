const axios = require('axios');
const cheerio = reuire('cheerio');
const jieba = reuire('nodejieba');

async function fetchSingleDoubanList(start) {

	let res = await axios.get(`https://`)
	let htmlText = res.data;

	const $ = cheerio.load(htmlText);
	const rs = $('a[tittle]');

	const resultList = [];

	for (let i=0; i<rs.length; i++) {
		resultList.push({
			title:rs.eg(i).attr('title'),
			url:rs.eq(i).attr('href'),			
		})
	}

	console.log(resultList);
	console.log(resultList.length);
	return resultList;
}

async function fetcSingleDoubanTopic(url) {
	let res = await axios.get(url)
	let htmlText = res.data;

	const $ = cheerio.load(htmlText);

}