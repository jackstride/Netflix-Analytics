import React from "react";
import "./index.css";

import StockData from "./Components/StockData";
import TopBar from "./Components/TopBar";
import StreamingStats from "./Components/StreamingStats";
import FitlerChart from "./Components/filterChart";
import YearlySubscriptions from "./Components/YearlySubscriptions";

function App() {
  return (
    <div className="app_container">
      <div className="bg"> </div> <TopBar />
      <section className="second">
        <div className="grid_left">
          <div className="child"> </div> <div className="child"> </div>{" "}
          <div className="child"> </div> <div className="child"> </div>{" "}
        </div>{" "}
        <div className="grid_right">
          <YearlySubscriptions />
        </div>{" "}
      </section>
      <section className="second">
        <div className="grid_left">
          <div className="child"> </div> <div className="child"> </div>{" "}
          <div className="child"> </div> <div className="child"> </div>{" "}
        </div>{" "}
        <div className="grid_right">{/* <StockData /> */}</div>
      </section>
      <section className="second">
        <div className="grid_left">
          <div className="child"> </div> <div className="child"> </div>{" "}
          <div className="child"> </div> <div className="child"> </div>{" "}
        </div>{" "}
        <div className="grid_right">{<StreamingStats />}</div>
      </section>
    </div>
  );
}

export default App;
