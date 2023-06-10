import React from 'react'
import { useGlobalContext } from './Context'
import {NavLink} from 'react-router-dom'

const Movies = () => {
    const {movie} =useGlobalContext();
  return (
    <section className='movie-page'>
        <div className='container grid grid-4-col'>

        {movie.map((curmovie)=>{
            const {name,id,image} =curmovie.show;
            const {score} =curmovie;
            return (
                <NavLink to={`movie/${id}/${score}`} key={id}> 
                    <div className='card'>
                        <div className='card-info'>
                            <img src={image.medium} alt={id} />
                            <h2>{name}</h2>
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