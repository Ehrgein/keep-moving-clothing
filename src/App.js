import React from "react";
import BestSellers from "./components/BestSellers"; 
import Contentone from "./components/Contentone";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sliderbar from "./components/Sliderbar";
import shoes from "./assets/category/newbalancemobile.jpg";
import NewsLetter from "./components/NewsLetter";
import NewCategoryList from "./components/NewCategoryList";
import NewHero from "./components/NewHero";
import Hamburger from "./components/Hamburger";




function App() {


  return (
    
    <div className='opacity-changer'>
        <Header/>
        <NewHero/>
        <Contentone />
        <NewsLetter/>
    </div>

  );
}



export default App


