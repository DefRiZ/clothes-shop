import React from "react";
import Benefits from "../components/Benefits/Benefits";
import Slider from "../components/Slider/Slider";
import NewCollection from "../components/NewCollection/NewCollection";
import MainSlider from "../components/MainSlider/MainSlider";

const Main = () => {
  return (
    <div>
      <MainSlider />
      <NewCollection />
      <Benefits />
      <Slider />
    </div>
  );
};

export default Main;
