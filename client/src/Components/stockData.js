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
    });
    this.chart();
  }

  componentDidUpdate() {
    d3.select("#stockData svg").remove();
    this.chart();
  }

  // getYear = e => {
  //   console.log(this.state.data);
  //   let year = e.target.value;

  //   let start = new Date("01/01/" + year);
  //   let end = new Date("12/31/" + year);

  //   let filtered = this.state.data.filter(data => {
  //     let day = data.date.slice(0, 2);
  //     let month = data.date.slice(3, 5);
  //     let year = data.date.slice(6, 10);

  //     return (
  //       new Date(year, month, day) >= start && new Date(year, month, day) <= end
  //     );
  //   });
  //   this.setState({ setData: filtered });
  // };

  chart = () => {
    let { data } = this.state;

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

    data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.Close = +d.Close;
    });

    x.domain(
      d3.extent(data, function(d) {
        return d.date;
      })
    );
    y.domain([
      0,
      d3.max(data, function(d) {
        return d.Close;
      })
    ]);

    let line = svg
      .append("path")
      .attr("class", "line")
      .attr("d", valueline(data));

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y));

    let update = option => {
      if (option == "0") {
        line.attr("d", valueline(data));
      } else {
        let start = new Date("01/01/" + option);
        let end = new Date("12/31/" + option);

        let newData = data.filter(data => {
          return new Date(data.date) >= start && new Date(data.date) <= end;
        });
        x.domain(
          d3.extent(newData, function(d) {
            return d.date;
          })
        );
        y.domain([
          0,
          d3.max(newData, function(d) {
            return d.Close;
          })
        ]);
        svg.select(".x-axis").call(d3.axisBottom(x));
        svg.select(".y-axis").call(d3.axisLeft(y));
        line.attr("d", valueline(newData));
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
