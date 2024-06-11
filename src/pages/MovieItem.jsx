import React from 'react'
import { Link } from 'react-router-dom'

const MovieItem = ({movie}) => {
  return (
    <>
       <div className='flex gap-10 items-center '>
        <div className='flex flex-col items-center gap-3'>
          <Link to={`/movie/${movie?._id}`}>
            <p className='text-2xl max-w-[150px]'>{movie?.title}</p>
          </Link>
          <div>
            <img src={movie?.imageUrl} className='w-[100px] h-[100px]'/>
          </div>
        </div>
        <div>
          <p>{movie?.shortDescription}</p>
        </div>
       </div>
    </>
  )
}

export default MovieItem