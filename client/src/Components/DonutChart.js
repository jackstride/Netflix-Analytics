import React, { Component } from 'react'
const axios = require("axios")

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
        }).catch(err => console.log(err))
    }


    render() {
        return (
            <div className="partTwo">
                <h1> Hello</h1>
            </div>
        )
    }
}
