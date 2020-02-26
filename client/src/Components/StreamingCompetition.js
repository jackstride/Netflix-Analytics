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



    let tooltip = d3.select("body").append("div").attr("class","tooltip").style("visibility","hidden")

    let text = d3.select(".tooltip")
    .append("svg")
    .attr("dominant-baseline","middle").attr("width","100%").attr("height", "fit-content")
    
      

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

        text.select(".bubbleTitle").remove();
        text.select(".bubblesub").remove();
        text.select("text").remove();
        text.select(".subs").remove();
        text.select(".area").remove();

        text.append("text").attr("x","20").attr("dy", "20").attr("class","bubbleTitle").text(d.data.service)
        text.append("text").attr("x","20").attr("dy", "35").attr("class","bubblesub").text(d.data.parent)

        text.append("text").attr("class","startDate").attr("x","20").attr("y", "60")
        text.select(".startDate").append("tspan").text("Launch Date: ")
        text.select(".startDate").append("tspan").text(d.data.launchDate)

        text.append("text").attr("class","subs").attr("x","20").attr("y", "80")
        text.select(".subs").append("tspan").text("Subscribers: ")
        text.select(".subs").append("tspan").text(d.data.subscribers)

        text.append("text").attr("class","area").attr("x","20").attr("y", "100")
        text.select(".area").append("tspan").text("Area Coverage: ")
        text.select(".area").append("tspan").text(d.data.area)
        
      })
      .on("mouseout", (d, i, nodes) => {
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
