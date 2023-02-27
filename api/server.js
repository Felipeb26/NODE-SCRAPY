require("dotenv").config();
const express = require("express");
const compress = require("compression");
const { routes } = require("./routes/youtube.routes");

const PORT = process.env.PORT | 3004;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compress());
app.use(routes);

const server = app.listen(PORT, () => {
	console.log(`Host running inside http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
	server.close();
	console.log("MAIl fechando");
});
