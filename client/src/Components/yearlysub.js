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
    axios.get("/wiki").then(res => {
      this.setState({ data: res.data.data });
      this.chart();
    });
  }

  chart = () => {
    var margin = { top: 20, right: 20, bottom: 50, left: 40 };
    let width =
      document.getElementById("line").offsetWidth -
      margin.left -
      margin.right;
    let height =
      document.getElementById("line").offsetHeight -
      margin.top -
      margin.bottom;
    var y = d3
      .scaleBand()
      .range([height, 0])
      .padding(0.7);

    let x = d3.scaleLinear().range([0, width]);

    let svg = d3
      .select("#line")
      .append("svg")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + "0" + ")");

    // Scale the range of the data in the domains
    x.domain([
      0,
      d3.max(this.state.data, function(d) {
        return d.number;
      })
    ]);
    y.domain(
      this.state.data.map(function(d) {
        return d.year;
      })
    );

    // add the x Axis
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
      .select("path")
      .attr("display", "none")

    // append the rectangles for the bar chart
    svg
      .selectAll(".bar")
      .data(this.state.data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      // .attr("x", function(d) { return x(d.number); })
      .attr("y", function(d) {
        return y(d.year);
      })
      .attr("rx",10)
      .attr("height", y.bandwidth())
      .transition()
      .attr("width", function(d) {
        return x(d.number);
      })
      .delay(500)
      .duration(1500);

    // add the y Axis
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .selectAll("line,path").style("display","none")
      
            

    //Bottom text
    svg
      .append("text")
      .attr("transform", "rotate(0)")
      .attr("x", width / 2)
      .attr("y", height + 30)
      .attr("dy", "1em")
      .attr("fill", "#ffffff")
      .attr("height", "50")
      .style("text-anchor", "middle")
      .text("Views per billion");
  };
  render() {
    return (
      <div className="container col-1">
        <h1 style={{ padding: "20px" }}>Netflix Subscribers per year</h1>
        <div id="line"></div>
      </div>
    );
  }
}
