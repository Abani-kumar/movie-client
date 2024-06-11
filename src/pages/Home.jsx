import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(
          "https://movie-server-jccp.onrender.com/api/getAllMovies"
        );
        let result = await response.json();
        setMovies(result?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  return (
    <>
      <div className="w-full h-full text-white overflow-x-auto">
        <div className=" text-center">
          <p className="text-3xl pt-4">Movie Homepage</p>
        </div>
        <div className="w-[80%] mx-auto flex flex-col gap-4 pb-12">
          {movies.map((movie) => (
            <MovieItem key={movie?._id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
