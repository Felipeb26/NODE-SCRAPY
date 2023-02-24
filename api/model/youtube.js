class Youtube {
	title;
	views;
	time;
	channel;
	videoLink;
	description;

	constructor(title, views, time, channel, videoLink, description) {
		this.title = title;
		this.views = views;
		this.time = time;
		this.channel = channel;
		this.videoLink = videoLink;
		this.description = description;
	}

	getTitle() {
		return this.title;
	}
	getViews() {
		return this.views;
	}
	getTime() {
		return this.time;
	}
	getChannel() {
		return this.channel;
	}
	getDescription() {
		return this.description;
	}
	getVideoLink() {
		return this.videoLink;
	}

	setTitle() {
		this.title = title;
	}

	setViews() {
		this.views = views;
	}

	setTime() {
		this.time = time;
	}

	setChannel() {
		this.channel = channel;
	}

	setDescription() {
		this.description = description;
	}

	setVideoLink() {
		this.videoLink = videoLink;
	}
}

module.exports ={
	Youtube
}
