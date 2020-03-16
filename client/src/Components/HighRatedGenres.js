import React, { useEffect, useState } from "react";
import file from "../data/NetflixShows.csv";
import axios from "axios";
const d3 = require("d3");

const HightRatedGenres = () => {
  let [data, setData] = useState();

  useEffect(() => {
    d3.csv(file).then(res => {
      let drama = getAverageRating(res, "Drama");
      let comedy = getAverageRating(res, "Comedy");
      let docu = getAverageRating(res, "Docu-Series");
      let family = getAverageRating(res, "Family Animation");
      let marvel = getAverageRating(res, "Marvel");

      let dataArray = [
        { genre: "Drama", value: drama },
        { genre: "Comedy", value: comedy },
        { genre: "Docu-Series", value: docu },
        { genre: "Family", value: family },
        { genre: "Marvel", value: marvel }
      ];
      setData(dataArray);
    });
  }, [setData]);

  useEffect(() => {
    if (data) {
      chart();
    }
  }, [data]);

  let getAverageRating = (array, genreName) => {
    let genre = array.filter(item => item.Major_Genre === genreName);

    let total = genre.reduce((prev, curr) => {
      return Math.ceil(prev + parseInt(curr.IMDB_Rating) / genre.length);
    }, 0);

    return total;
  };

  let chart = () => {
    var margin = { top: 20, right: 20, bottom: 30, left: 100 },
      width =
        document.getElementById("averageRating").offsetWidth -
        margin.left -
        margin.right,
      height =
        document.getElementById("averageRating").offsetHeight -
        margin.top -
        margin.bottom;

    var y = d3
      .scaleBand()
      .range([height, 0])
      .padding(0.1);

    var x = d3.scaleLinear().range([0, width]);

    var svg = d3
      .select("#averageRating")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function(d) {
      d.value = +d.value;
    });

    x.domain([
      0,
      d3.max(data, function(d) {
        return d.value;
      })
    ]);
    y.domain(
      data.map(function(d) {
        return d.genre;
      })
    );

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")

      .attr("width", function(d) {
        return x(d.value);
      })
      .attr("y", function(d) {
        return y(d.genre);
      })
      .attr("height", y.bandwidth());

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));
  };

  return <div id="averageRating"></div>;
};

export default HightRatedGenres;
