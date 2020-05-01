import React, { useEffect, useState } from "react";
import file from "../data/NetflixShows.csv";
const d3 = require("d3");

const HightRatedGenres = () => {
  let [data, setData] = useState();

  useEffect(() => {
    d3.csv(file).then((res) => {
      let drama = getAverageLength(res, "Drama");
      let comedy = getAverageLength(res, "Comedy");
      let docu = getAverageLength(res, "Docu-Series");
      let family = getAverageLength(res, "Family Animation");
      let marvel = getAverageLength(res, "Marvel");

      let dataArray = [
        { genre: "Drama", value: drama },
        { genre: "Comedy", value: comedy },
        { genre: "Docu-Series", value: docu },
        { genre: "Family", value: family },
        { genre: "Marvel", value: marvel },
      ];
      setData(dataArray);
    });
  }, [setData]);

  // Botch Job
  useEffect(() => {
    if (data) {
      chart();
    }
  }, [data]);

  let getAverageLength = (array, genreName) => {
    let genre = array.filter((item) => item.Major_Genre === genreName);

    let total = genre.reduce((prev, curr) => {
      return Math.ceil(prev + parseInt(curr.Max_Length) / genre.length);
    }, 0);

    return total;
  };

  let chart = () => {
    var margin = { top: 20, right: 20, bottom: 30, left: 100 },
      width =
        document.getElementById("runtime").offsetWidth -
        margin.left -
        margin.right,
      height =
        document.getElementById("runtime").offsetHeight -
        margin.top -
        margin.bottom;

    // set the ranges
    var y = d3.scaleBand().range([height, 0]).padding(0.1);

    var x = d3.scaleLinear().range([0, width]);

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3
      .select("#runtime")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // format the data
    data.forEach(function (d) {
      d.value = +d.value;
    });

    // Scale the range of the data in the domains
    x.domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ]);
    y.domain(
      data.map(function (d) {
        return d.genre;
      })
    );
    //y.domain([0, d3.max(data, function(d) { return d.sales; })]);

    // append the rectangles for the bar chart
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      //.attr("x", function(d) { return x(d.sales); })
      .attr("width", function (d) {
        return x(d.value);
      })
      .attr("y", function (d) {
        return y(d.genre);
      })
      .attr("height", y.bandwidth());

    // add the x Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g").call(d3.axisLeft(y));
  };

  return <div id="runtime"></div>;
};

export default HightRatedGenres;
