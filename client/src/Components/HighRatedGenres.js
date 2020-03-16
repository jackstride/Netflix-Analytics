import React, { useEffect, useState } from "react";
import axios from "axios";
const d3 = require("d3");

const HightRatedGenres = () => {
  let [data, setData] = useState();

  useEffect(() => {
    axios.get("/averagegenre").then(res => {
      setData(res.data.dataArray);
    });
  }, [setData]);

  useEffect(() => {
    if (data) {
      chart();
    }
  }, [data]);
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
