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
        this.chart();
    });
  }


  getYear = (year) => {

    let start = new Date ("01/01/" + year)
    let end = new Date ("12/31/" + year)

    let data = this.state.data.filter(data => new Date(data.Date) >= start && new Date(data.Date) <= end) // One way???
    
     return data;
  }

  chart = () => {

    let data = this.getYear(2017)

  var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = document.querySelector("#stockData").offsetWidth - margin.left - margin.right,
    height = document.querySelector("#stockData").offsetHeight - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%d/%m/%Y")

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.Close); })
    .y(function(d) {return y(d.Date) });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#stockData").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")



  // format the data
  data.forEach(function(d) {
      d.Date = parseTime(d.Date)
      console.log(d.Date)
      d.Close = +d.Close;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.Close; }));
  y.domain([0, d3.max(data, function(d) { return d.Date; })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));
  }
    

  render() {
    return (
      <div className="container col-1">
        <div id="stockData"></div>
      </div>
    );
  }
}
