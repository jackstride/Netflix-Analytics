import React, { Component } from 'react'
import { ascending } from 'd3';
const axios = require("axios")
const d3 = require("d3");

export default class DonutChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }

    // Fethc and filter data
    componentDidMount() {
        axios.get('/bestNetflixShows')
        .then(res => {
            let data = res.data.dataArray;
             data = data.filter(data => data.IMDB_Rating >= 89);
            this.setState({data: data})
            this.chart();
        }).catch(err => console.log(err))
    }


chart = () => {
    
    let height = 300;
    let width = 300;
    let thickness = 30;
    let duration = 750;
    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let scale = d3.scaleLinear()
    .domain([0,100])
    .range([0,  2 * Math.PI]);

    let radius = Math.min(width,height) /2;

    // Svg
    let svg = d3.select("#donutchart")
    .append('svg')
    .attr("class","pie")
    .attr("height",height)
    .attr("width", width)
    .attr("dominant-baseline","middle")
    
    
    let g = svg.append('g')
    .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

    let arc = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius)
    .startAngle(scale(0))
    .endAngle(scale(100))

    let arc2 = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius)
    .startAngle(scale(0))
    .endAngle(scale(50))

    // let pie = d3.pie()
    // .value(function(d,i){
    // return d.IMDB_Rating
    // }).sort(ascending)

    let path = g
    .append("g")
    .append('path')
    .attr('d', arc)
    .attr('fill', '#323232')
    
    let g2 = g.append('g')
    .attr("class", "test");


    
    let path2 = g2
    .append('path')
    .attr('d', arc2)
    .attr('fill', '#FF0055')
    

    let percent = svg.append("text").text("50%").attr("class","donut_percent").attr("text-anchor","middle").attr("x", "50%").attr("y", "50%").attr("dominant-baseline","middle")
    let rating = percent.append("tspan").text("IMDB Rating").attr("text-anchor","middle").attr("x", "50%").attr("y", "60%")

    let text = d3.select(".partTwo").append("div").attr("class","donut_text")
    .selectAll('text')
    .data(this.state.data)
    .enter()
    .append("div").attr("class","donut_row")
    .append("text")
    .text((d) => {
        return ` ${d.Title}`
    })
    .on("mouseover", (d,i) => {
        arc2.endAngle(scale(d.IMDB_Rating));
        path2.transition().duration(1000).attr('d', arc2);
        percent.text(` ${d.IMDB_Rating}%`);
        percent.append("tspan").text(d.Title).attr("text-anchor","middle").attr("x", "50%").attr("y", "60%")
    })
}

// d3 arc .transition






    render() {
        return (

            <div className="partTwo">
                <div id="donutchart"></div>
            </div>
        )
    }
}
