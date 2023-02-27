const route = require("express");
const routes = route.Router({ caseSensitive: false });
const { request } = require("../service/requests");

routes.get("/request/?:limit/?:query", async (req, res) => {
	let { limit, query } = req.params;
	query = query.substring(query.lastIndexOf("=") + 1);
	limit = limit.substring(limit.lastIndexOf("=") + 1);

	await request(query, limit)
		.then(it => {
			return res.send(it);
		})
		.catch(err => res.status(400).send({ erro: err }));
});

routes.get("/", async (req, res) => {
	return res.status(200).send({ message: "scrapy is working" });
});

module.exports = {
	routes,
};
