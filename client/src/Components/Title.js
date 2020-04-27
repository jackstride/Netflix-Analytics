import React, { useState } from "react";
import Modal from "./Modal";
import { treemapBinary } from "d3";

const Title = ({ index, children }) => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState([
    {
      title: "Netflix Subscriptions By Year",
      bodyText:
        "In 2019, Netflix has over 160 millions customers spanning over 40 countires. That's an increase of 125 million from 2013.",
    },
    {
      title: "Top shows rated by IMDB",
      bodyText:
        "Users who are registed on IMDB are able to rate movies and tv shows. Here's a list of Netflix original content that has scored 80% or above.",
    },
    {
      title: "The competitors",
      bodyText:
        "Netflix began it's streaming service in 2007 whilst Amazon Prime content began service in 2006. As time progressed, other companies began their own steaming service to rival the giants",
    },
    {
      title: "Rating by Genres",
      bodyText:
        "Netflix consists of many genres. Here are some that scored high in ratings by watchers.",
    },
    {
      title: "Average length of one episode",
      bodyText:
        "The average show length from each genre ranges from half an hour to over 70 minutes. Best get ready for a binge watch.",
    },
    {
      title: "Netflix Stock Data",
      bodyText:
        "Netflix's stock price has flucated throughout the last for year. A noticeable rise was in October 2016 where Netflix published their third-quater earnings with strong internation subscriber growth. July 18th 2019 saw a decline in price due to a large drop in subscribers.",
    },
  ]);

  return (
    <div
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      className="graph_title"
    >
      <h2>{info[index].title}</h2>
      {show ? <Modal text={info[index].bodyText} /> : null}
    </div>
  );
};

export default Title;
