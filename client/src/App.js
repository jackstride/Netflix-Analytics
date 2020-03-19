import React, { useRef, useEffect, forwardRef } from "react";
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

let App = () => {
  return (
    <div>
      <Intro />
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
        <div className="title">
          <h2>Who are the competition</h2>
        </div>
        <section className="col-1 cicrle_group">
          <StreamingStats />
        </section>

        <section className="col-1 partThree">
          <div className="bar_title">
            <h2>Netflix Genres</h2>
          </div>
          <div className="bar_title">
            <h2>Netflix Episodes</h2>
          </div>
          <HightRatedGenres />
          <AverageRunTime />
          <div className="tag1">
            <span>Average Rating (IMDB)</span>
          </div>
          <div className="tag2">
            <span>Average length (One Episode)</span>
          </div>
        </section>
        <div className="title">
          <h2>Stock Data</h2>
        </div>
        <section className="col-1 stock">
          <StockData />
        </section>
        <section className="genres"></section>
      </div>
    </div>
  );
};

export default App;
