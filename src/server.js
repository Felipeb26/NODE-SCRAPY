const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

const request = async () => {
	const youtubeList = [];
	const limit = 3;

	let driver = await new Builder().forBrowser("chrome").build();
	await driver.get("https://www.youtube.com/results?search_query=java");

	const content = await driver.findElement(By.xpath('//*[@id="contents"]'));

	for (var i = 1; i <= limit; i++) {
		var xpath = `//*[@id="contents"]/ytd-video-renderer[${i}]`;

		var video = await content.findElement(By.xpath(xpath));
		var link = await video
			.findElement(By.tagName("a"))
			.getAttribute("href");

		let text = (await video.getText()).split("\n")

		console.log(text);

		var tube = Youtube.builder()
			.title(ifNull(text[0]))
			.views(ifNull(text[1]))
			.time(ifNull(text[2]))
			.channel(ifNull(text[3]))
			.description(ifNull(text[4]))
			.videoLink(link)
			.build();

		youtubeList.push(tube);
	}
	setInterval(() => {
		driver.close();
		driver.quit();
	}, 10000);
	console.table(youtubeList);
};

request();

// const option = new chrome.Options()
