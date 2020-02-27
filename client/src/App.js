import React, {useRef,useEffect, forwardRef} from "react";
import "./index.css";

import StockData from "./Components/StockData";
import Header from "./Components/Header";
import StreamingStats from "./Components/StreamingCompetition";
import FitlerChart from "./Components/filterChart";
import YearlySubscriptions from "./Components/YearlySubscriptions";
import DonutChart from './Components/DonutChart'
import Intro from './Components/Intro'

let App = () => {
  
  
  return (
    <div>
    <Intro />
    <div className="app_container">
      <Header />
      <div className="a_question">
        <span class="title">The Growth<br></br> of Netflix.</span>
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
