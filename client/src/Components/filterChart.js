import React, { Component } from 'react'
import axios from 'axios'

export default class filterChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: []
        };
      }
    
      componentDidMount() {
        axios.get("/csvData").then(res => {
          this.setState({ data: res.data.dataArray });
          console.log(this.state);
        });
      }


      chart = () => {



      }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
