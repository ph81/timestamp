const express = require("express");
const app = express();
const parseTime = require("./app.js");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use("/", express.static("./public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:time", function (req, res) {
    const output = parseTime(req.params.time);
    res.send(JSON.stringify(output));
});

app.listen(process.env.PORT || 8080);
