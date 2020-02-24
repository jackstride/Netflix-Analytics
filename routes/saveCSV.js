const express = require("express");
const router = express.Router();
const rp = require("request-promise");
const cheerio = require("cheerio");
const csv = require("csv-parser");
const fs = require("fs");

//Get wikipedia table for the amount of subscriptions across the globe from netflix
router.get("/wiki", (req, res) => {
  rp("https://en.wikipedia.org/wiki/Netflix").then(page => {
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

    data = data
      .map(d => {
        return JSON.stringify(Object.values(d));
      })
      .join("\n")
      .replace(/(^\[)|(\]$)/gm, "");

    console.log(data);

    fs.writeFile("data/WorldwideSubscriptions.csv", data, "utf8", err => {
      err
        ? console.log(
            "There was an error saving CSV, most likely the wiki page has changed which is why I'm creating this function.."
          )
        : console.log("Save successful");
    });
  });
});
module.exports = router;

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
