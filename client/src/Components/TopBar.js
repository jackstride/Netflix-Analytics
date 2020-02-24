import React, { Component } from 'react'

import Logo from '../images/netflix.png'
import Avatar from '../images/avi.png'

export default class TopBar extends Component {
    render() {
        return (
            <div className="topbar">
                <img src={Logo} alt="Netflix"></img>
                <h2> Who's Watching?</h2>
                <div className="profiles">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
            </div>
        )
    }
}
