import React from "react";
import Benefits from "../components/Benefits/Benefits";
import Slider from "../components/Slider/Slider";
import NewCollection from "../components/NewCollection/NewCollection";

const Main = () => {
  return (
    <div>
      <NewCollection />
      <Benefits />
      <Slider />
    </div>
  );
};

export default Main;
