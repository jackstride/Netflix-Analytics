import React, { Component } from "react";
import file from "../data/WorldwideSubscriptions.csv";
const axios = require("axios");
const d3 = require("d3");

// Web scraping tutorial - https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/
export default class WorldSubscribers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    d3.csv(file).then((res) => {
      this.setState({ data: res });
      this.chart();
    });
  }

  chart = () => {
    var margin = { top: 60, right: 20, bottom: 0, left: 70 };
    let width = document.getElementById("yearly_bar").offsetWidth - margin.top;
    let height =
      document.getElementById("yearly_bar").offsetHeight - margin.left;

    // set the ranges
    var x = d3.scaleBand().range([0, width]).padding(0.6);

    var y = d3.scaleLinear().range([height, 0]);

    let svg = d3
      .select("#yearly_bar")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + "0" + ")");

    var aspect = width / height,
      chart = d3.select("#yearly_bar");
    d3.select(window).on("resize", function () {
      var targetWidth = chart.node().getBoundingClientRect().width;
      chart.attr("width", targetWidth);
      chart.attr("height", targetWidth / aspect);
    });

    x.domain(
      this.state.data.map(function (d) {
        return d.year;
      })
    );
    y.domain([
      30,
      d3.max(this.state.data, function (d) {
        return 190;
      }),
    ]);

    svg
      .append("g")
      .call(d3.axisLeft(y))
      .selectAll("line")
      .attr("class", "linecolor")
      .attr("x1", "0")
      .attr("x1", width)
      .attr("stroke-dasharray", "10")
      .attr("stroke-width", ".5");

    svg
      .selectAll(".bar")
      .data(this.state.data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return x(d.year);
      })
      .attr("rx", "5")
      .attr("width", x.bandwidth())
      .attr("y", function (d) {
        return y(30);
      })
      .on("mouseover", (d, i, svg) => {
        document.getElementsByClassName("year")[0].innerText = d.year;
        document.getElementsByClassName("users")[0].innerText =
          d.number + " Million";
        d3.select(svg[i])
          .transition()
          .delay(0)
          .duration(1000)
          .attr("height", height - 20 - y(d.number));
        // one.text(d.number)
      })
      .on("mouseout", (d, i, svg) => {
        d3.select(svg[i])
          .transition()
          .duration(100)
          .attr("height", height - y(d.number));
      })
      .transition()
      .attr("y", function (d) {
        return y(d.number);
      })
      .duration(1000)
      .delay(2000)

      .attr("height", function (d) {
        return height - y(d.number);
      });

    // add the x Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("line,path")
      .style("display", "none");
  };

  render() {
    return (
      <div className="yearly shadow">
        <div className="yearly_info">
          <h6>Users</h6>
          <h3 className="year">2013</h3>
          <h4 className="users">41.43 Million</h4>
        </div>
        <div id="yearly_bar"></div>
      </div>
    );
  }
}
