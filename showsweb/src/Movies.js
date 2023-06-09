import React from 'react'
import { useGlobalContext } from './Context'
import {NavLink} from 'react-router-dom'

const Movies = () => {
    const {movie} =useGlobalContext();
    // console.log(movie)
  return (
    <section className='movie-page'>
        <div className='container grid grid-4-col'>

        {movie.map((curmovie)=>{
            const {name,id,image} =curmovie.show;
            const {score} =curmovie;
            return (
                // <NavLink to={"https://www.tvmaze.com/shows/34653/all-american"} key={curmovie.show.id}>
                <NavLink to={`movie/${id}/${score}`} key={score}> 
                    <div className='card'>
                        <div className='card-info'>
                            <h2>{name}</h2>
                            <img src={image.medium} alt={id} />
                        </div>
                    </div>
                </NavLink>
                ); 
        })}
        </div>
    </section>
  )
}

export default Movies