import React from "react";
import "./index.css";

import StockData from "./Components/StockData";
import Header from "./Components/Header";
import StreamingStats from "./Components/StreamingCompetition";
import FitlerChart from "./Components/filterChart";
import YearlySubscriptions from "./Components/YearlySubscriptions";

function App() {
  return (
    <div className="app_container">
      <Header />
    </div>
  );
}

export default App;
