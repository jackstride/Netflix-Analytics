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

router.get("/bestNetflixShows", (req, res) => {
  let dataArray = [];
  fs.createReadStream("./data/NetflixShows.csv")
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      res.status(200).json({ dataArray });
    });
});

router.get("/averagegenre", (req, res) => {
  let dataArray = [];
  fs.createReadStream("./data/NetflixShows.csv")
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      let drama = getAverageRating(dataArray, "Drama");
      let comedy = getAverageRating(dataArray, "Comedy");
      let docu = getAverageRating(dataArray, "Docu-Series");
      let family = getAverageRating(dataArray, "Family Animation");
      let marvel = getAverageRating(dataArray, "Marvel");

      dataArray = [
        { genre: "Drama", value: drama },
        { genre: "Comedy", value: comedy },
        { genre: "Docu-Series", value: docu },
        { genre: "Family", value: family },
        { genre: "Marvel", value: marvel }
      ];
      res.status(200).json({ dataArray });
    });
});

router.get("/averagelength", (req, res) => {
  let dataArray = [];
  fs.createReadStream("./data/NetflixShows.csv")
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      let drama = getAverageLength(dataArray, "Drama");
      let comedy = getAverageLength(dataArray, "Comedy");
      let docu = getAverageLength(dataArray, "Docu-Series");
      let family = getAverageLength(dataArray, "Family Animation");
      let marvel = getAverageLength(dataArray, "Marvel");

      dataArray = [
        { genre: "Drama", value: drama },
        { genre: "Comedy", value: comedy },
        { genre: "Docu-Series", value: docu },
        { genre: "Family", value: family },
        { genre: "Marvel", value: marvel }
      ];
      console.log(dataArray);
      res.status(200).json({ dataArray });
    });
});

router.get("/stockData", (req, res) => {
  let dataArray = [];
  fs.createReadStream("./data/StockData.csv")
    .pipe(csv())
    .on("data", data => dataArray.push(data))
    .on("end", () => {
      res.status(200).json({ dataArray });
    });
});

let getAverageRating = (array, genreName) => {
  let genre = array.filter(item => item.Major_Genre === genreName);

  let total = genre.reduce((prev, curr) => {
    return Math.ceil(prev + parseInt(curr.IMDB_Rating) / genre.length);
  }, 0);

  return total;
};
let getAverageLength = (array, genreName) => {
  let genre = array.filter(item => item.Major_Genre === genreName);

  let total = genre.reduce((prev, curr) => {
    return Math.ceil(prev + parseInt(curr.Max_Length) / genre.length);
  }, 0);

  return total;
};

module.exports = router;
