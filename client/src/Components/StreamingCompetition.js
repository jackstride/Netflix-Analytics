import React, { Component } from "react";
import { schemeSet3 } from "d3";
const axios = require("axios");
const d3 = require("d3");

export default class StreamingStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    axios.get("/StreamingCompetition").then(res => {
      this.setState({ data: res.data.dataset });
      console.log(this.state)
      this.chart();
    });
  }

  chart = () => {
    var diameter = document.getElementById("test").offsetHeight;
    var bubble = d3
      .pack(this.state.data)
      .size([diameter, diameter])
      .padding(50);

    var svg = d3
      .select("#test")
      .append("svg")
      .attr("width", diameter)
      .attr("height", diameter)
      .attr("class", "bubble");

    var nodes = d3.hierarchy(this.state.data).sum(function(d) {
      console.log(d);
      return d.subscribers;
    });

    var node = svg
      .selectAll(".node")
      .data(bubble(nodes).descendants())
      .enter()
      .filter(function(d) {
        return !d.children;
      })
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    node.append("title").text(function(d) {
      return d.data.subscribers;
    });

    node
      .append("circle")
      .attr("class", "bar")
      .attr("r", function(d) {
        return d.r;
      })
      .on("mouseover", (d, i, nodes) => {
        d3.select(nodes[i])
          .transition()
          .duration(1500)
          .attr("r", function(d) {
            return d.r * 1.4;
          });
      })
      .on("mouseout", (d, i, nodes) => {
        d3.select(nodes[i])
          .transition()
          .duration(1000)
          .attr("r", function(d) {
            return d.r;
          });
      });

    node
      .append("text")
      .attr("dy", ".2em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return d.data.service;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", function(d) {
        return d.r / 5;
      })
      .attr("fill", "black");

    d3.select(this.frameElement).style("height", diameter + "px");
  };

  render() {
    return (
        <div id="test"></div>
    );
  }
}
