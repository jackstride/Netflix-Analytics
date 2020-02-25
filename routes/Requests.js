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

//Cannot return data within the csv-parser function that's why it's repetitive
// Maybe look at headers

router.get("/StreamingCompetition", (req, res) => {
  let dataArray = [];
  fs.createReadStream("./data/StreamingCompetition.csv")
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      let dataset = {
        children: dataArray
      };
      res.status(200).json({ dataset });
    });
});

router.get("/subcriptionData", (req, res) => {
  let dataArray = [];
  fs.createReadStream("./data/WorldwideSubscriptions.csv")
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      res.status(200).json({ dataArray });
    });
});




router.get("/bestNetflixShows" , (req,res) => {
  let dataArray = [];
  fs.createReadStream("./data/NetflixShows.csv")
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      res.status(200).json({ dataArray });
    });
})

module.exports = router;
