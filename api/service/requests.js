const { Builder, By } = require("selenium-webdriver");
const { ServiceBuilder } = require("selenium-webdriver/chrome");
const webdriver = require("selenium-webdriver");

const { ifNull } = require("./facilities");
const { Youtube } = require("../model/youtube");

const chromeDriver = `${__dirname}\\chromedriver\\chromedriver.exe`;
const serviceBuilder = new ServiceBuilder(chromeDriver);

const request = async (param, limit) => {
	try {
		const youtubeList = [];

		const driver = await new Builder()
			.forBrowser("chrome")
			.withCapabilities(webdriver.Capabilities.chrome())
			.setChromeService(serviceBuilder)
			.setChromeOptions(new chrome.Options().headless())
			.build();

		param = param.replace(" ", "+");
		await driver.get(
			`https://www.youtube.com/results?search_query=${param}`
		);

		const content = await driver.findElement(
			By.xpath('//*[@id="contents"]')
		);

		for (var i = 1; i <= limit; i++) {
			var xpath = `//*[@id="contents"]/ytd-video-renderer[${i}]`;

			var video = await content.findElement(By.xpath(xpath));
			var link = await video
				.findElement(By.tagName("a"))
				.getAttribute("href");

			let text = (await video.getText()).split("\n");

			const youtube = new Youtube(
				ifNull(text[0]),
				ifNull(text[1]),
				ifNull(text[2]),
				ifNull(text[3]),
				link,
				ifNull(text[4])
			);

			youtubeList.push(youtube);
		}
		console.log(youtubeList);

		if (youtubeList.length < 0) {
			return "ERRO AO FAZER SOLICITACAO";
		}
		console.log(youtubeList);
		driver.close()
		return youtubeList;
	} catch (error) {
		driver.close();
		console.log("driver fechando\n\n");
		console.log(error);
		return error;
	}
};

module.exports = {
	request,
};
