import React from "react";
import "./index.css";

import StockData from "./Components/StockData";
import Header from "./Components/Header";
import StreamingStats from "./Components/StreamingCompetition";
import FitlerChart from "./Components/filterChart";
import YearlySubscriptions from "./Components/YearlySubscriptions";
import DonutChart from './Components/DonutChart'
import Intro from './Components/Intro'

function App() {
  return (
    <div>
    <Intro />
    <div className="app_container">
      <Header />
      <div className="a_question">
        <h1>The rise & success of Netlfix.</h1>
      </div>
      <section className="col-1 partone">
        <YearlySubscriptions />
        <DonutChart />
      </section>
      <section className="col-1 cicrle_group">
        <StreamingStats />
      </section>
    </div>
    </div>
  );
}

export default App;
