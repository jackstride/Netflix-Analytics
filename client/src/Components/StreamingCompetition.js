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
      this.chart();
    });
  }

  chart = () => {
    var diameter = document.getElementById("bubbleChart").offsetHeight;
    
    var bubble = d3
      .pack(this.state.data)
      .size([diameter, diameter])
      .padding(10);

    var svg = d3
      .select("#bubbleChart")
      .append("svg")
      .attr("width", diameter)
      .attr("height", diameter)
      .attr("class", "bubble");

    var nodes = d3.hierarchy(this.state.data).sum(function(d) {
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
      }).attr("cursor","pointer")

    node.append("title").text(function(d) {
      return d.data.subscribers;
    });

    // let box = d3.select("node")
    // .append("rect")
    // .attr("class", "test")
    // .attr('x',(d) => {
      
      
    // })


    let tooltip = d3.select("body").append("div").attr("class","testdiv").style("visibility","hidden")

    let text = d3.select(".testdiv")
    .append("svg")
    .attr("text-anchor", "middle")
    
      

    node
      .append("circle")
      .attr("r", function(d) {
        return d.r;
      })
      .style("stroke","#FF0055")
      .style("fill", "transparent")
      .on("mousemove", (d, i, nodes) => {
        tooltip
        .style("visibility", "visible")
        .style("left", () => {
          return d3.event.pageX + "px"
        }).style("top", () => {
          return d3.event.pageY + "px"
        });

        text.select("text").remove();
        text.append("text").text(d.data.parent)
        .attr("class","bubble_text")
        .attr("x","0")
        .attr("y", "0")
        text.select("text").append("tspan").text(d.data.parent)
        text.select("text").append("tspan").text(d.data.service)
        text.select("text").append("tspan").text(d.data.launchDate)
        text.select("text").append("tspan").text(d.data.subscribers)
        text.select("text").append("tspan").text(d.data.area)
        text.select("text").selectAll("tspan").attr("x","50").attr("dy", "15")

        
      })
      .on("mouseout", (d, i, nodes) => {
        text.select("text").remove();
        tooltip.style("visibility","hidden");
      });

    node
      .append("text")
      .attr("dy", ".2em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return d.data.service;
      })
      .attr("fill", "white");

    d3.select(this.frameElement).style("height", diameter + "px");
  };

  render() {
    return (
        <div id="bubbleChart"></div>
    );
  }
}
