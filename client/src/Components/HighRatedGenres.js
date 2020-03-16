import React, { useEffect, useState } from "react";
import axios from "axios";

const HightRatedGenres = () => {
  let [data, setData] = useState();

  useEffect(() => {
    axios.get("/bestNetflixShows").then(res => {
      setData(res.data.dataArray);
    });
  }, [setData]);

  useEffect(() => {
    getAverageRating("Drama");
  }, [data]);

  let getAverageRating = genreName => {
    if (data) {
      let genre = data.filter(item => item.Major_Genre === genreName);
      console.log(genre);
      let total = genre.reduce((prev, curr) => {
        return Math.ceil(prev + parseInt(curr.IMDB_Rating) / genre.length);
      }, 0);
      console.log(total);
    }
  };

  return <div id="piechart"></div>;
};

export default HightRatedGenres;
