const express = require("express");
const router = express.Router();
const rp = require("request-promise");
const cheerio = require("cheerio");
const csv = require("csv-parser");
const fs = require("fs");
const url = "https://en.wikipedia.org/wiki/Netflix";

//Get wikipedia table for the amount of subscriptions across the globe from netflix
router.get("/wiki", (req, res) => {
  rp(url).then(page => {
    let data = [];
    cheerio("table.wikitable>tbody", page)
      .eq(-1)
      .find("tr")
      .each((i, elm) => {
        let number = parseFloat(
          cheerio("td", elm)
            .eq(-2)
            .text()
            .replace(/\n/g, "")
        );
        let year = cheerio("th", elm)
          .text()
          .replace(/\n/g, "");
        year = parseInt(year.substr(3, 4));
        data[i] = {
          year: year,
          number: number
        };
      });

    data.splice(0, 1);
    console.table(data);
    res.status(200).json({ data: data });
  });
});

module.exports = router;
