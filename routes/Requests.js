const express = require("express");
const router = express.Router();
const rp = require("request-promise");
const cheerio = require("cheerio");
const csv = require("csv-parser");
const fs = require("fs");

// router.get("/csvData", (req, res) => {
//   createdataArray("./data/netflix.csv", res);
// });

// router.get("/stockData", (req, res) => {
//   createdataArray("./data/stockdata.csv", res);
// });

router.get("/subcriptionData", (req, res) => {
  createdataArray("./data/worldwide-subcriptions.csv", res);
});

createdataArray = (path, res) => {
  let dataArray = [];

  fs.createReadStream(path)
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("data", data => console.log(data))
    .on("end", () => {
      res.status(200).json({ dataArray });
    });
};

module.exports = router;
