import React, { useState } from "react";

import Logo from "../images/netflix.png";
import { ReactComponent as SVG } from "../images/analytics.svg";
import { ReactComponent as Info } from "../images/info-solid.svg";

const Header = () => {
  let [show, setShow] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="Netflix"></img>
      <div className="information">
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="analytics info"
        >
          <Info />
          <span className="span_analytics">Analytics</span>
        </div>
      </div>
      {show ? (
        <Panel
          close={() => {
            setShow(!show);
          }}
        />
      ) : null}
    </div>
  );
};

export default Header;

let Panel = ({ close }) => {
  return (
    <div className="information_panel">
      <div className="information_container">
        <div onClick={close} className="close">
          X
        </div>
        <div className="content">
          <h1>An Overview..</h1>
          <p>
            Since being founed in 1997, Netflix has grown the become one of the
            Largest streaming services serving over 190 counties. An exploration
            into it's success and statistics has proven difficult with the
            company being overly secure abouts its numbers. The following
            statistics has been collected using the following websites:
          </p>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Netflix">
                Wikipedia - Netflix
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Streaming_services">
                Wikipedia - Streaming Services
              </a>
            </li>
            <li>
              <a href="https://data.world/mattschroyer/netflix-original-series/workspace/file?filename=Netflix_Original_Series_2013_2017.xlsx">
                Data word
              </a>
            </li>
            <li>
              <a href="https://www.kaggle.com/jainshukal/netflix-stock-price">
                Stock Data - Kaggle
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
