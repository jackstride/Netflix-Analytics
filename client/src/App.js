import React, { useState } from "react";
import "./index.css";
import "./media.css";

import StockData from "./Components/stockData";
import Header from "./Components/Header";
import StreamingStats from "./Components/StreamingCompetition";
import FitlerChart from "./Components/filterChart";
import YearlySubscriptions from "./Components/YearlySubscriptions";
import DonutChart from "./Components/DonutChart";
import Intro from "./Components/Intro";
import HightRatedGenres from "./Components/HighRatedGenres";
import AverageRunTime from "./Components/AverageRunTime";
import Modal from "./Components/Modal";
import Title from "./Components/Title";

let App = () => {
  let [show, setShow] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
  });
  return (
    <div style={{ position: "relative" }}>
      {/* <Intro /> */}
      <div className="app_container">
        <Header />
        <div className="a_question">
          <h1 className="title">
            The Growth<br></br> of Netflix.
          </h1>
        </div>
        <section className="col-1 partone">
          <Title index="0" />
          <Title index="1" />
          <YearlySubscriptions />
          <DonutChart />
        </section>
        <Title index="2" />
        <section className="col-1 cicrle_group shadow">
          <StreamingStats />
        </section>
        <section className="col-1 partThree">
          <Title index="3" />
          <Title index="4" />
          <HightRatedGenres />
          <AverageRunTime />
        </section>
        <Title index="5" />
        <section className="col-1 stock shadow">
          <StockData />
        </section>
      </div>
    </div>
  );
};

export default App;
