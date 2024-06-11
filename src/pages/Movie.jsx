import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(
          `https://movie-server-jccp.onrender.com/api/getMoviesById/${id}`
        );
        let result = await response.json();
        setMovie(result?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  return (
    <>
      <div className="text-white w-full h-full">
        <div className=" w-[85%] mx-auto">
            <div className="pt-5">
              <p className="text-2xl text-center">{movie?.title}</p>
            </div>
            <div className=" w-full flex items-center justify-between mt-10">
               <div className="w-[20%]">
                 <img src={movie?.imageUrl} className='w-[200px] h-[200px]'/>
               </div>
               <div className="w-[55%]">
                 <p>{movie?.longDescription}</p>
               </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
