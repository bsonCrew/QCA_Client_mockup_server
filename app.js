const postResponse = require("./postResponse.json");
const getResponse = require("./getResponse.json");
const cors = require("cors");
const express = require("express");

const app = express();
// app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

// {"status":200,"message":"SUCCESS","data":[{"label":null,"homepage":null,"audits":null,"categoryScore":null,"validator":null,"robot":null,"recentRequestedDate":null}]}

// GET
function handleTop5(req, res) {
	const data = getResponse;
	res.header("Access-Control-Allow-Origin", "*");
	res.send(data);
	console.log(data);
}
app.use(cors());
app.get("/top5", handleTop5);

// POST

function handleSearch(req, res) {
	const data = JSON.stringify(postResponse);
	res.header("Access-Control-Allow-Origin", "*");
	// setTimeout(() => {
	res.send(data);
	console.log(data.slice(0, 100));
	// }, 5000);

	// res.send(data["audits"]);
	console.log("data fetched");
}

app.use(cors());
app.post("/lighthouse", handleSearch);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
