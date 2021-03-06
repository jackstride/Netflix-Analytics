import React, { useEffect } from "react";
import HOC from "../images/hoc3.png";

let Intro = (props) => {
  useEffect(() => {
    // Fixed issue with scrolling
    // https://stackoverflow.com/questions/1174863/javascript-scrollto-method-does-nothing

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.focus();
    window.scrollTo(0, 0);

    let bg = document.querySelector(".app_intro");

    bg.classList.add("shrink");
  }, []);

  return (
    <div className="app_intro">
      <img alt="Pablo Escobar" src={HOC}></img>
      <span className="intro_text">
        The Rise <br></br>&amp; Success <br></br>of Netflix
      </span>
      <hr className="title_hr"></hr>
    </div>
  );
};

export default Intro;
