import React, { Component, Fragment } from "react";
import file from "../data/NetflixShows.csv";
import Arrow from "../images/arrow-up-solid.svg";
import { timeHours } from "d3";
const axios = require("axios");
const d3 = require("d3");

export default class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      singleData: "",
    };
  }

  // Fethc and filter data
  componentDidMount() {
    d3.csv(file).then((res) => {
      let data = res;
      data = data.filter((data) => data.IMDB_Rating >= 80);
      this.setState({ data: data });
      this.setState({
        singleData: this.state.data[0],
      });
      this.chart();
    });
  }

  loadOptions = () => {
    return (
      <div className="donut_select">
        <select
          onChange={(e) => {
            this.setState({ singleData: this.state.data[e.target.value] });
          }}
        >
          {this.state.data.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.Title}
              </option>
            );
          })}
        </select>
        <span>
          <img src={Arrow}></img>
        </span>
        <div className="select_info">
          <div className="item_info">
            <h5>Genre</h5>
            <h3>{this.state.singleData.Major_Genre}</h3>
          </div>
          <div className="item_info">
            <h5>Release Data</h5>
            <h3>{this.state.singleData.premiereDate}</h3>
          </div>
          <div className="item_info">
            <h5>IMDB Rating</h5>
            <h3>{this.state.singleData.IMDB_Rating}</h3>
          </div>
        </div>
      </div>
    );
  };

  chart = () => {
    let height = 380;
    let width = 380;
    let thickness = 40;
    let duration = 750;
    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let scale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, 2 * Math.PI]);

    let radius = Math.min(width, height) / 2;

    // Svg
    let svg = d3
      .select("#donutchart")
      .append("svg")
      .attr("class", "pie")
      .attr("height", height)
      .attr("width", width)
      .attr("dominant-baseline", "middle");

    let g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let arc = d3
      .arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(scale(0))
      .endAngle(scale(100));

    let arc2 = d3
      .arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(scale(0))
      .endAngle(scale(80));

    // let pie = d3.pie()
    // .value(function(d,i){
    // return d.IMDB_Rating
    // }).sort(ascending)

    let path = g
      .append("g")
      .append("path")
      .attr("d", arc)
      .attr("fill", "#e9e9e9");

    let g2 = g.append("g").attr("class", "test");

    let path2 = g2.append("path").attr("d", arc2).attr("fill", "#FF0055");

    let percent = svg
      .append("text")
      .text("80%")
      .attr("class", "donut_percent")
      .attr("text-anchor", "middle")
      .attr("x", "50%")
      .attr("y", "50%")
      .attr("dominant-baseline", "middle");
    // let rating = percent
    //   .append("tspan")
    //   .text("Star Wars: The Clone Wars (season 6)")
    //   .attr("text-anchor", "middle")
    //   .attr("x", "50%")
    //   .attr("y", "50%");

    // let date = percent
    //   .append("tspan")
    //   .text("07-Mar-14")
    //   .attr("text-anchor", "middle")
    //   .attr("x", "50%")
    //   .attr("y", "60%");

    // Change from hover to select for more items
    // let text = d3
    //   .select(".partTwo")
    //   .append("div")
    //   .attr("class", "donut_text")
    //   .selectAll("text")
    //   .data(this.state.data)
    //   .enter()
    //   .append("div")
    //   .attr("class", "donut_row")
    //   .append("text")
    //   .text((d) => {
    //     return ` ${d.Title}`;
    //   });

    //
    // .on("mouseover", (d, i) => {
    //   arc2.endAngle(scale(d.IMDB_Rating));
    //   path2.transition().duration(1000).attr("d", arc2);
    //   percent.text(` ${d.IMDB_Rating}%`);
    //   date.text(` ${d.premiereDate}%`);
    //   percent
    //     .append("tspan")
    //     .text(d.Title)
    //     .attr("text-anchor", "middle")
    //     .attr("x", "50%")
    //     .attr("y", "60%");
    //   percent
    //     .append("tspan")
    //     .text(d.premiereDate)
    //     .attr("text-anchor", "middle")
    //     .attr("x", "50%")
    //     .attr("y", "70%");
    // });

    d3.select(".donut_select>select").on("change", (d, i, nodes) => {
      let item = this.state.data[nodes[0].value];
      arc2.endAngle(scale(item.IMDB_Rating));
      path2.transition().duration(1000).attr("d", arc2);
      percent.text(` ${item.IMDB_Rating}%`);
      // date.text(` ${item.premiereDate}%`);

      // percent
      //   .append("tspan")
      //   .text(item.Title)
      //   .attr("text-anchor", "middle")
      //   .attr("x", "50%")
      //   .attr("y", "50%")
      //   .attr(("textLength", "20"));
      // percent
      //   .append("tspan")
      //   .text(item.premiereDate)
      //   .attr("text-anchor", "middle")
      //   .attr("x", "50%")
      //   .attr("y", "60%");
    });
  };

  // d3 arc .transition

  render() {
    return (
      <div className="partTwo shadow">
        <div id="donutchart"></div>
        {this.state.data ? this.loadOptions() : null}
      </div>
    );
  }
}
