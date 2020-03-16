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
        <div className="analytics">
          <SVG />
          <span className="span_analytics">Analytics</span>
        </div>
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
      <div className="information_text">
        <div onClick={close} className="close">
          X
        </div>
        <h1> Netflix</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ducimus
          facere laboriosam consequuntur enim, similique iste quos inventore
          quidem! Dolores delectus laborum ullam ipsam expedita nam pariatur
          repellat natus beatae!
        </p>
      </div>
    </div>
  );
};
