import React, { useState } from "react";
import Modal from "./Modal";
import { treemapBinary } from "d3";

const Title = ({ index, children }) => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState([
    {
      title: "Netflix Subscriptions By Year",
      bodyText:
        "According to Wikipedia, Netflix has over 160 millions customers spanning over 40 countires. ",
    },
    {
      title: "Top shows rated by IMDB",
      bodyText: "Hell this is going to be a test and some infirmation",
    },
    {
      title: "The start of streaming",
      bodyText: "Hell this is going to be a test and some infirmation",
    },
    {
      title: "Rating by Genres",
      bodyText: "Hell this is going to be a test and some infirmation",
    },
    {
      title: "Average length of one episode",
      bodyText: "Hell this is going to be a test and some infirmation",
    },
    {
      title: "Netflix Stock Data",
      bodyText: "Hell this is going to be a test and some infirmation",
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
