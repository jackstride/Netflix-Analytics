import React, { Component } from "react";
import { thresholdScott } from "d3";
const axios = require("axios");
const d3 = require("d3");

// Web scraping tutorial - https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/
export default class WorldSubscribers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      setData: []
    };
  }

  componentDidMount() {
    axios.get("/stockData").then(res => {
      this.setState({ data: res.data.dataArray });
      console.log(this.state.data);
    });
    this.chart();
  }

  componentDidUpdate() {
    d3.select("#stockData svg").remove();
    this.chart();
  }

  getYear = e => {
    console.log(this.state.data);
    let year = e.target.value;

    let start = new Date("01/01/" + year);
    let end = new Date("12/31/" + year);

    let filtered = this.state.data.filter(data => {
      // let day = data.date.slice(0, 2);
      // let month = data.date.slice(3, 5);
      // let year = data.date.slice(6, 10);

      return new Date(data.date) >= start && new Date(data.date) <= end;
    });
    console.log(this.state);

    this.setState({ setData: filtered });
  };

  chart = () => {
    let { setData } = this.state;

    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width =
        document.querySelector("#stockData").offsetWidth -
        margin.left -
        margin.right,
      height =
        document.querySelector("#stockData").offsetHeight -
        margin.top -
        margin.bottom;

    // parse the date / time
    var parseTime = d3.timeParse("%d/%m/%Y");
    //"%a %b %e %X %Y"

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the line
    var valueline = d3
      .line()
      .x(function(d) {
        return x(d.date);
      })
      .y(function(d) {
        return y(d.Close);
      });

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3
      .select("#stockData")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(150,20)");

    // format the data
    setData.forEach(function(d) {
      d.date = parseTime(d.date);
      d.Close = +d.Close;
    });

    // Scale the range of the data
    x.domain(
      d3.extent(setData, function(d) {
        return d.date;
      })
    );
    y.domain([
      0,
      d3.max(setData, function(d) {
        return d.Close;
      })
    ]);

    // Add the valueline path.

    svg
      .append("path")
      .attr("class", "line")
      .attr("d", valueline(setData));

    // Add the X Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g").call(d3.axisLeft(y));
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
