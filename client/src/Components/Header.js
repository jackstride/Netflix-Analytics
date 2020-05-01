import React, { useState, useRef, useEffect, forwardRef } from "react";

import Logo from "../images/netflix.png";
import { ReactComponent as Info } from "../images/info-solid.svg";

const Header = () => {
  let ref = useRef();
  let [show, setShow] = useState(false);

  useEffect(() => {
    console.log(ref);
  });

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
          ref={ref}
          close={() => {
            setShow(!show);
          }}
        />
      ) : null}
    </div>
  );
};

export default Header;

let Panel = forwardRef(({ close }, ref) => {
  useEffect(() => {
    let handleClick = (e) => {
      if (!ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
  return (
    <div className="information_panel">
      <div className="information_container">
        <div onClick={close} className="close">
          X
        </div>
        <div ref={ref} className="content">
          <h1>An Overview..</h1>
          <p>
            Since being founed in 1997, Netflix has grown to become one of the
            largest streaming services accessible in over 190 counties. This
            dashboard aims to explore the growth over a range of years and if
            original content, the genre of content or the length time are
            factors to its growth.<br></br>Subscription numbers and stock price
            information are closley linked with release dates of Netflix
            favourites but offer unusual insgihts. See if you can spot any!{" "}
            <br></br>
            The following statistics has been collected using the following
            websites:
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
});
