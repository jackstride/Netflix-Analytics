const express = require("express");
const app = express();
const port = 5000;
const rp = require("request-promise");
const url = "https://en.wikipedia.org/wiki/Netflix";
const cheerio = require("cheerio");
const csv = require("csv-parser");
const fs = require("fs");

const file = "./netflix.csv";

//Get wikipedia table for the amount of subscriptions across the globe from netflix
app.get("/wiki", (req, res) => {
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
    res.status(200).json({ data: data });
  });
});

// Competitor data according to VOD wikipedia
app.get("/streaming", (req, res) => {
  rp("https://en.wikipedia.org/wiki/Video_on_demand").then(page => {
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

app.get("/csvData", (req, res) => {
  let dataArray = [];

  fs.createReadStream(file)
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      res.status(200).json({ dataArray });
    });
});



app.get("/stockData", (req, res) => {
  let dataArray = [];

  fs.createReadStream('./stockdata.csv')
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      console.log(dataArray[0])
      res.status(200).json({ dataArray });
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));