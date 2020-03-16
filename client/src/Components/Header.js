import React, { Component } from "react";

import Logo from "../images/netflix.png";
import { ReactComponent as SVG } from "../images/analytics.svg";
import { ReactComponent as Info } from "../images/info-solid.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="Netflix"></img>
        <div className="analytics">
          <SVG />
          <span className="span_analytics">Analytics</span>
        </div>
        <div className="analytics">
          <Info />
          <span className="span_analytics">Analytics</span>
        </div>
      </div>
    );
  }
}
