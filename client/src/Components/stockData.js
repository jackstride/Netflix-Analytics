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
    axios.get("/stockData").then(res => {
      this.setState({ data: res.data.dataArray });
      if (this.state.data.length > 1) {
        this.chart();
      }
    });
  }

  chart = () => {


    let data = this.state.data
  
    var margin = { top: 20, right: 20, bottom: 50, left: 20 };
    let width =
      document.getElementById("example").offsetWidth -
      margin.left -
      margin.right;
    let height =
      document.getElementById("example").offsetHeight -
      margin.top -
      margin.bottom;

    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var valueline = d3
      .line()
      .x(function(d) {
        return x(d.year);
      })
      .y(function(d) {
        return y(d.number);
      });

    var svg = d3
      .select("#example")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    x.domain(
      d3.extent(this.state.data, function(d) {
        return d.year
      })
    );
    y.domain([
      0,
      d3.max(this.state.data, function(d) {
        return d.number;
      })
    ]);


    svg.selectAll("path").attr("display", "none");

    svg
      .append("path")
      .data([this.state.data])
      .attr("d", valueline)
      .style("fill", "none")
      .style("stroke-width", "2")
      .style("stroke", "red");

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("line")
      .attr("class", "linecolor")
      .attr("stroke-dasharray", "10")
      .attr("stroke-width", ".5")
      .attr("y1", "0")
      .attr("y2", -height);

    svg
      .append("g")
      .call(d3.axisLeft(y))
      .selectAll("line,path")
      .style("display", "none");
  };

  render() {
    return (
      <div className="container col-1">
        <h1 style={{ padding: "20px" }}>Netflix Subscribers per year</h1>
        <div id="example"></div>
      </div>
    );
  }
}