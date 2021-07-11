import React, { useEffect } from "react";
import Header from "../../../components/HomeComp/Header";
import Movie from "../../../components/HomeComp/Movie/Movie";
import movieApi from "../../../api/MovieApi";

const HomePage = () => {
  useEffect(() => {
    const fetchMovie = async () => {
      const movieList = await movieApi.getAll();
      console.log(movieList);
    };
    fetchMovie();
  }, []);
  return (
    <>
      <Header />
      <Movie />
    </>
  );
};

export default HomePage;
