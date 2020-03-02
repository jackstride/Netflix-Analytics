import React, { useRef, useEffect, forwardRef } from "react";
import "./index.css";

import StockData from "./Components/StockData";
import Header from "./Components/Header";
import StreamingStats from "./Components/StreamingCompetition";
import FitlerChart from "./Components/filterChart";
import YearlySubscriptions from "./Components/YearlySubscriptions";
import DonutChart from "./Components/DonutChart";
import Intro from "./Components/Intro";

let App = () => {
  return (
    <div>
      {/* <Intro /> */}
      <div className="app_container">
        <Header />
        <div className="a_question">
          <h1 className="title">
            The Growth<br></br> of Netflix.
          </h1>
        </div>
        <section className="col-1 partone">
          <div className="graph_title">
            <h2>Netflix Subscriptions by Year</h2>
          </div>
          <div className="graph_title">
            <h2>Shows rated by IMDB</h2>
          </div>
          <YearlySubscriptions />
          <DonutChart />
        </section>
        <h2>Who are the competition</h2>
        <section className="col-1 cicrle_group">
          <StreamingStats />
        </section>
        <section className="col-1 stock">
          <StockData />
        </section>
      </div>
    </div>
  );
};

export default App;
