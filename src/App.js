import React from "react";
import BestSellers from "./components/BestSellers";
import Contentone from "./components/Contentone";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenWomen from "./components/MenWomen";
import Sliderbar from "./components/Sliderbar";

function App() {
  return (
    <div>
      <Sliderbar/>
      <Header />
      <Hero />
      <Contentone/>
    </div>
  );
}

export default App;
