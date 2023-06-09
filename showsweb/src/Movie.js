import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { useGlobalContext } from "./Context";

import { API_URL, useGlobalContext } from './Context';

console.log("7");
const Movie = () => {
  const { id , score } = useParams();
  const iid=id;
  // const { movie } = useGlobalContext();
  const [url, seturl] = useState("");
  // const [id, setid] = useState("");
  const [type, settype] = useState("");
  
  const [isLoading, setisLoading] = useState(true);
  // const [movie, setmovie] = useState("");
  const [temp, settemp] = useState();


  const getMovies=async(url)=>{
    // setisLoading(true);
    try{
        const res = await fetch(url);
        const data= await res.json();
        if(data.length!== 0){
            // setisLoading(false);
            settemp(data);
            console.log("recieving picture",data,temp);
        }
        else{
            console.log("khali hai");
            // setisError({
            //     show:true,
            //     msg:data.Error
            // })
        }
    }
    catch(Error){
        console.error(Error);
    }
}
  useEffect(() => {
    getMovies(`${API_URL}`);
    // setTimeout(() => {
    //   console.log("movie",movie);
      
    //   let tempo=movie.filter((cur) => {
    //     console.log(cur.score);
    //     return (cur.score==score)
  
    //   })
    //   settemp(tempo);
  
    //   console.log(temp);
    // }, 5000);
    if(temp!=undefined &&temp.length>=1){
      console.log("Data recieieved")
    }
  }, [])

  console.log("temp:",temp);
  // console.log("movie:",movie);
  console.log("52 map wala ");
  console.log(typeof(iid));
  // console.log(movie.length);
  // console.log(movie);



  return (
    <>
      
      <div>Movie score {score} </div>
      <div>Movie id {iid}</div>
      <div>Movie name </div>
    </>
  )
}

export default Movie;


// const Movies = () => {
//   const {movie} =useGlobalContext();
//   // console.log(movie)
// return (
//   <section className='movie-page'>
//       <div className='container grid grid-4-col'>

//       {movie.map((curmovie)=>{
//           const {name,id,image} =curmovie.show;
//           const {score} =curmovie;
//           return (
//               // <NavLink to={"https://www.tvmaze.com/shows/34653/all-american"} key={curmovie.show.id}>
//               <NavLink to={`movie/${id}/${score}`} key={score}>
//                   <div className='card'>
//                       <div className='card-info'>
//                           <h2>{name}</h2>
//                           <img src={image.medium} alt={id} />
//                       </div>
//                   </div>
//               </NavLink>
//               );
//       })}
//       </div>
//   </section>
// )
// }