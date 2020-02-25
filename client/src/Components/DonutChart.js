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

    let radius = Math.min(width,height) /2;

    let svg = d3.select("#donutchart")
    .append('svg')
    .attr("class","pie")
    .attr("height",height)
    .attr("width",width);
    
    let g = svg.append('g')
    .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

    let arc = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius)


    let pie = d3.pie()
    .value(function(d,i){
    return d.IMDB_Rating
    }).sort(ascending)

    let path = g.selectAll('path')
    .data(pie(this.state.data))
    .enter()
    .append("g")
    .append('path')
    .attr('d', arc)
    .attr('fill', (d,i) => color(i))
    .each(function(d, i) { this._current = i; })
    


    



}








    render() {
        return (
            <div className="partTwo">
                <div id="donutchart"></div>
            </div>
        )
    }
}
