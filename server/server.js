const express = require("express");
const app = express();
const port = 5000;

const SaveCSV = require("./routes/saveCSV");
const Requests = require("./routes/Requests");

app.use("", Requests);
app.use("", SaveCSV);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
