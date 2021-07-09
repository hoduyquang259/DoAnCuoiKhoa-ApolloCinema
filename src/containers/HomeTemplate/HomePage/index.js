import React from "react";
import Carousel from "./Carousel";
import "./HomePage.scss";
import Movie from "./Movie";
import App from "./App";
export default function HomePage() {
  return (
    <div className="home-page">
      <Carousel />
      <Movie />
      <App />
    </div>
  );
}
