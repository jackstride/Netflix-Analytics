const express = require("express");
const router = express.Router();
const rp = require("request-promise");
const cheerio = require("cheerio");
const csv = require("csv-parser");
const fs = require("fs");
const file = "../netflix.csv";

// Competitor data according to VOD wikipedia
router.get("/streaming", (req, res) => {
  rp("https://en.wikipedia.org/wiki/Streaming_services").then(page => {
    let data = [];
    let dataset = {};

    let table = cheerio("table.wikitable>tbody", page).find("tr");

    table.each((i, elm) => {
      let length = cheerio("td", elm).length;

      if (length == 7) {
        parent[i] = parent[i - 1];
        service = cheerio("td", elm)
          .eq(0)
          .text()
          .replace(/\n/g, "");
        launchData = cheerio("td", elm)
          .eq(1)
          .text()
          .replace(/\n/g, "");
        subscribers = cheerio("td", elm)
          .eq(2)
          .text()
          .replace(/\n/g, "");
      } else {
        parent = cheerio("td", elm)
          .eq(0)
          .text()
          .replace(/\n/g, "");
        service = cheerio("td", elm)
          .eq(1)
          .text()
          .replace(/\n/g, "");
        launchDate = cheerio("td", elm)
          .eq(2)
          .text()
          .replace(/\n/g, "");
        subscribers = cheerio("td", elm)
          .eq(3)
          .text()
          .replace(/\n/g, "");
        area = cheerio("td", elm)
          .eq(6)
          .text()
          .replace(/\n/g, "");
      }
      if (!launchDate) {
        launchDate = "Not Available";
      }

      if (!subscribers) {
        subscribers = 0;
      } else {
        subscribers = subscribers.replace(" million", "");
      }

      if (!area) {
        area = "Area count not available";
      }

      data[i] = {
        parent,
        service,
        launchDate,
        subscribers: parseFloat(subscribers),
        area
      };
    });
    data.splice(0, 1);
    data = data.filter(data => data.subscribers != 0);

    //Needed for d3 hierarchy
    dataset = {
      children: data
    };

    res.status(200).json({ dataset });
  });
});

router.get("/csvData", (req, res) => {
  let dataArray = [];

  fs.createReadStream(file)
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      res.status(200).json({ dataArray });
    });
});

router.get("/stockData", (req, res) => {
  let dataArray = [];

  fs.createReadStream("./stockdata.csv")
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      res.status(200).json({ dataArray });
    });
});

module.exports = router;
