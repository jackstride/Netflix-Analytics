import React, { Component } from "react";
import { thresholdScott, create } from "d3";
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
      this.chart();
    });
  }

  chart = () => {
    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width =
        document.querySelector("#stockData").offsetWidth -
        margin.left -
        margin.right,
      height =
        document.querySelector("#stockData").offsetHeight -
        margin.top -
        margin.bottom;

    var parseTime = d3.timeParse("%d/%m/%Y");

    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var valueline = d3
      .line()
      .x(function(d) {
        return x(d.date);
      })
      .y(function(d) {
        return y(d.Close);
      });

    var svg = d3
      .select("#stockData")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(150,20)");

    let stockTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stock_tooltip")
      .style("visibility", "hidden");

    let text = d3
      .select(".stock_tooltip")
      .append("svg")
      .attr("dominant-baseline", "middle")
      .attr("width", "100%");

    this.state.data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.Close = +d.Close;
    });

    x.domain(
      d3.extent(this.state.data, function(d) {
        return d.date;
      })
    );
    y.domain([
      0,
      d3.max(this.state.data, function(d) {
        return d.Close;
      })
    ]);

    let line = svg
      .append("path")
      .attr("class", "line")
      .attr("d", valueline(this.state.data));

    let createDots = chartData => {
      d3.selectAll("#stockData circle").remove();
      let dots = svg
        .selectAll("dot")
        .data(chartData)
        .enter()
        .append("circle")
        .attr("r", 5)
        .attr("cx", function(d) {
          return x(d.date);
        })
        .attr("cy", function(d) {
          return y(d.Close);
        })
        .style("cursor", "pointer")
        .style("fill", "transparent")
        .on("mouseover", function(d, i, nodes) {
          text.select(".bubbleTitle").remove();
          text.select(".bubblesub").remove();
          text.select(".open").remove();
          text.select(".close").remove();
          text.select(".high").remove();
          text.select(".low").remove();

          d3.select(nodes[i]).style("fill", "red");
          stockTooltip
            .style("visibility", "visible")
            .style("left", () => {
              return d3.event.pageX + "px";
            })
            .style("top", () => {
              return d3.event.pageY + "px";
            });
          //Date
          text
            .append("text")
            .attr("x", "20")
            .attr("dy", "20")
            .attr("class", "bubbleTitle")
            .text(d.date);
          //Open
          text
            .append("text")
            .attr("class", "open")
            .attr("x", "20")
            .attr("y", "40");
          text
            .select(".open")
            .append("tspan")
            .attr("class", "tooltip_header")
            .text("Open: ");
          text
            .select(".open")
            .append("tspan")
            .text(d.Open);
          //Close
          text
            .append("text")
            .attr("class", "close")
            .attr("x", "20")
            .attr("y", "60");
          text
            .select(".close")
            .append("tspan")
            .attr("class", "tooltip_header")
            .text("Close: ");
          text
            .select(".close")
            .append("tspan")
            .text(d.Close);
          //High
          text
            .append("text")
            .attr("class", "high")
            .attr("x", "20")
            .attr("y", "80");
          text
            .select(".high")
            .append("tspan")
            .attr("class", "tooltip_header")
            .text("High: ");
          text
            .select(".high")
            .append("tspan")
            .text(d.High);
          //High
          text
            .append("text")
            .attr("class", "low")
            .attr("x", "20")
            .attr("y", "100");
          text
            .select(".low")
            .append("tspan")
            .attr("class", "tooltip_header")
            .text("Low: ");
          text
            .select(".low")
            .append("tspan")
            .text(d.Low);
        })
        .on("mouseleave", (d, i, nodes) => {
          d3.select(nodes[i]).style("fill", "transparent");
        });
    };

    createDots(this.state.data);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y));

    let setChart = chartData => {
      x.domain(
        d3.extent(chartData, function(d) {
          return d.date;
        })
      );
      y.domain([
        0,
        d3.max(chartData, function(d) {
          return d.Close;
        })
      ]);
      svg
        .select(".x-axis")
        .transition(750)
        .call(d3.axisBottom(x));
      svg
        .select(".y-axis")
        .transition(750)
        .call(d3.axisLeft(y));
      line.attr("d", valueline(chartData));
    };

    let update = option => {
      if (option == "0") {
        setChart(this.state.data);
        createDots(this.state.data);
      } else {
        let start = new Date("01/01/" + option);
        let end = new Date("12/31/" + option);

        let newData = this.state.data.filter(data => {
          return new Date(data.date) >= start && new Date(data.date) <= end;
        });
        setChart(newData);
        createDots(newData);
      }
    };

    d3.select(".stock_toggles>select").on("change", (d, i, nodes) => {
      let option = nodes[i].value;
      update(option);
    });
  };

  render() {
    return (
      <div className="container col-1">
        <div className="stock_toggles">
          <select defaultValue="0" onChange={this.getYear}>
            <option value="0">All</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div id="stockData"></div>
      </div>
    );
  }
}
