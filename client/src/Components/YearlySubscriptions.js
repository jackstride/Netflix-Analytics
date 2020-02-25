import React, { Component } from "react";
const axios = require("axios");
const d3 = require("d3");

// Web scraping tutorial - https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/
export default class WorldSubscribers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("/subcriptionData").then(res => {
      this.setState({ data: res.data.dataArray });
      this.chart();
    });
  }

  chart = () => {
    var margin = { top: 60, right: 20, bottom: 0, left: 70 };
    let width =
      document.getElementById("yearly_bar").offsetWidth -
      margin.left -
      margin.right;
    let height =
      document.getElementById("yearly_bar").offsetHeight -
      margin.top -
      margin.bottom;

    // set the ranges
    var x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.6);

    var y = d3.scaleLinear().range([height, 0]);

    let svg = d3
      .select("#yearly_bar")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(
      this.state.data.map(function(d) {
        return d.year;
      })
    );
    y.domain([
      30,
      d3.max(this.state.data, function(d) {
        return 190;
      })
    ]);
    svg
      .append("g")
      // .select("g,domain")
      // .attr("display", "none")
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
      .attr("x", function(d) {
        return x(d.year);
      })
      .attr("rx", "5")
      .attr("width", x.bandwidth())
      .attr("y", function(d) {
        return y(30);
      })
      .transition()
      .attr("y", function(d) {
        return y(d.number);
      })
      .attr("height", function(d) {
        return height - y(d.number);
      })
      .delay(500)
      .duration(1500);

    // add the x Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("line,path")
      .style("display", "none");

    svg.append("text");
  };

  render() {
    return (
      <div className="yearly">
        <div id="yearly_bar"></div>
      </div>
    );
  }
}
