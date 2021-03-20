import React from "react";
import "./Home.css";
import headshot from "../../static_files/Zhu.jpg";

const Home = (props) => {
  var image =
    "https://previews.123rf.com/images/mangpor2004/mangpor20041708/mangpor2004170800063/83607686-blurred-park-with-bokeh-light-nature-background-fall-autumn-season.jpg";
  return (
    <>
      <img src={image} alt="background image" style={{ width: "100%" }}></img>
      <img src={headshot} alt="headshot"></img>
    </>
  );
};

export default Home;
